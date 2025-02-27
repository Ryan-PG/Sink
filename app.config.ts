export default defineAppConfig({
  title: 'Ryan Heida LS',
  email: 'mr.ryanheida@gmail.com',
  github: 'https://github.com/Ryan-PG',
  twitter: 'https://x.com/Ryan_Heida_',
  telegram: 'https://t.me/RyanHeida',
  // mastodon: 'https://sink.cool/mastodon',
  // blog: 'https://sink.cool/blog',
  description: '(Sink Clone)',
  image: './public/IMG_4146-01_NEW.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
