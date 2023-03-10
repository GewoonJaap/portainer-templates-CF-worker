![afbeelding](https://user-images.githubusercontent.com/33700526/224354256-8560f71c-652a-4df2-94dd-2ececd2a9e93.png)

# Portainer Templates | Cloudflare Worker
 
Cloudflare Worker script that merges different Portainer templates into one template file.

## Usage
![afbeelding](https://user-images.githubusercontent.com/33700526/224354146-f3d2e584-9604-4f2a-9ef5-2ec8007bc6fd.png)

- Login to Portainer
- Go to Settings -> Application settings -> App Templates
- Set `https://portainer-templates.mrproper.dev/template.json` as template URL
- Click `Save application settings`

## Development
- `wrangler login`
- Create a Cloudflare worker with name: `portainer-templates`
- `wrangler dev` for local testing
- `wrangler publish` to publish to Cloudflare
