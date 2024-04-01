# Technical Notes Site

Index via Algolia
```sh
docker run --platform linux/amd64 -it --env-file=.env -e "CONFIG=$(cat ./algolia.json | jq -r tostring)" algolia/docsearch-scraper
```