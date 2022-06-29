var __otherApiUrl = {url:["https://api.iminer.info/api/passport/login", "http://13.212.191.109/api/passport/login"]}
if (window.testApiDomain) {
    __otherApiUrl.url.forEach(a => window.testApiDomain(a))
}
