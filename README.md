![afbeelding](https://user-images.githubusercontent.com/33700526/224354256-8560f71c-652a-4df2-94dd-2ececd2a9e93.png)

# Portainer Templates | Cloudflare Worker
 
Cloudflare Worker script that merges different Portainer templates into one template file.

## Usage
![afbeelding](https://user-images.githubusercontent.com/33700526/224354146-f3d2e584-9604-4f2a-9ef5-2ec8007bc6fd.png)

1. Login to Portainer
2. Go to Settings -> Application settings -> App Templates
3. Set `https://portainer-templates.mrproper.dev/template.json` as template URL
4. Click `Save application settings`

## Development
- `wrangler login` to login to Cloudflare and authorize wrangler
- Create a Cloudflare Worker with name: `portainer-templates`
- `wrangler dev` for local testing
- `wrangler publish` to publish the worker to Cloudflare
