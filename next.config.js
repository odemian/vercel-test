module.exports = {
	async rewrites() {
		return [
			{
				source: '/blog/:slug',
				destination: 'https://yamm.ghost.io/:slug'
			},
			{
				source: '/blog',
				destination: 'https://yamm.ghost.io'
			},
			{
				source: '/asset/:slug*',
				destination: 'https://yamm.ghost.io/asset/:slug*'
			},
			
			{
				source: '/content/:slug*',
				destination: 'https://yamm.ghost.io/content/:slug*'
			},
			{
				source: '/private',
				destination: 'https://yamm.ghost.io/private/?r=%2F'
			},
		]
	}
}
