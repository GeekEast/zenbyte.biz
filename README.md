# Technical Notes Site

## Start
```sh
pnpm install
pnpm dev
```

## Index Algolia Locally
add `.env` file in root directly
```sh
APPLICATION_ID=
# the admin api key
API_KEY=
```
then run
```sh
docker run --platform linux/amd64 -it --env-file=.env -e "CONFIG=$(cat ./algolia.json | jq -r tostring)" algolia/docsearch-scraper
```
notice in algolia.json, the `lang` settings must be the same as in `.vitepress/config.mts`. for example, `en-US`


## References
[Markdown Guide](https://vitepress.dev/guide/markdown)