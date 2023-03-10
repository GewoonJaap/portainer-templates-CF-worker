# Portainer Templates | Cloudflare Worker
 
Cloudflare Worker script that merges different Portainer templates into one template file.

## Usage
- Login to Portainer
- Go to Settings -> Application settings -> App Templates
- Set `https://portainer-templates.mrproper.dev/` as template URL
- Click `Save application settings`

## Development
- `wrangler login`
- Create a Cloudflare worker with name: `portainer-templates`
- `wrangler dev` for local testing
- `wrangler publish` to publish to Cloudflare