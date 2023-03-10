export default {
  async fetch(request: any, env: any) {
    return await handleRequest(request)
  }
}

let cachedResponse = {
  cacheTime: 0,
  response: null
};

async function handleRequest(request: any) {

  const extraSources = [
    'https://raw.githubusercontent.com/mycroftwilde/portainer_templates/master/Template/template.json',
    'https://raw.githubusercontent.com/technorabilia/portainer-templates/main/lsio/templates/templates-2.0.json',
    'https://raw.githubusercontent.com/mikestraney/portainer-templates/master/templates.json',
    'https://raw.githubusercontent.com/donPabloNow/selfhosted-saas/master/Template/portainer-v2.json',
    'https://raw.githubusercontent.com/dnburgess/self-hosted-template/master/template.json',
    'https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Template/template.json',
    'https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/portainer-2.0/Template/template.json',
    'https://raw.githubusercontent.com/OliverCullimore/portainer-templates/master/templates.json',
    'https://raw.githubusercontent.com/mediadepot/templates/master/portainer.json',
    'https://raw.githubusercontent.com/portainer/templates/master/templates-2.0.json'
  ];

  const base = await fetch('https://raw.githubusercontent.com/xneo1/portainer_templates/master/Template/template.json');
  const baseJson = await base.json() as any;

  if (cachedResponse.response && cachedResponse.cacheTime > Date.now() - 1000 * 60 * 60) {
    console.log('Cached!')
    return new Response(JSON.stringify(cachedResponse.response), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  }

  const promises = extraSources.map(async (source) => {
    const response = await fetch(source);
    const json = await response.json() as any;
    json.templates.forEach((template: any) => {
      //check if template.image already exists in baseJson
      if (!baseJson.templates.find((t: any) => t.image === template.image)) {
        baseJson.templates.push(template);
      }
    });
  });
  await Promise.all(promises);


  cachedResponse = {
    cacheTime: Date.now(),
    response: baseJson
  };
  console.log('Serving uncached response');
  return new Response(JSON.stringify(baseJson), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}