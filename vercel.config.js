{
    "version": 2,
        "builds": [
            {
                "src": "package.json",
                "use": "@vercel/static-build",
                "config": {
                    "distDir": "dist/public"
                }
            }
        ],
            "routes": [
                {
                    "handle": "filesystem"
                },
                {
                    "src": "/(.*)",
                    "dest": "/dist/public/$1"
                }
            ],
                "cleanUrls": true
}