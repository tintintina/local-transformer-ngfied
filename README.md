#Local transformer

Angular-fied version of local/offline tool to transform data - url encode & decode, base64 encode & decode, format ugly json or xml - for debugging, troubleshooting, easier reading for humans. Let's keep our PII safe :)

<img width="951" alt="local-transformer-ngfied" src="https://cloud.githubusercontent.com/assets/17895643/14407825/8d9f5796-fe8b-11e5-98d5-c87f9c6a84a2.png">

Note that you will get a cross origin error when trying to run this locally using chrome due to its security restrictions on local file access. You can either 1) spin up a local server such as [http-server](https://github.com/indexzero/http-server) 2) use a different browser such as Firefox or 3) run this off a server you trust, e.g. within your firewall

Bootstrap included for styling, but not required

Thanks to [vkBeautify](https://github.com/vkiryukhin/vkBeautify) for xml formatting magic
