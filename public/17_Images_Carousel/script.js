function initCarousel() {
	return {
		active: 0,
		photos: [
			{
				id: 1,
				src: 'https://images.unsplash.com/photo-1598517511269-fd89417b561c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sam-moqadam-JvgB-pLHZ0I-unsplash.jpg',
				alt: 'Photo by Sam Moqadam',
			},
			{
				id: 2,
				src: 'https://images.unsplash.com/photo-1487702232819-65ae859daf8a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=zachrie-friesen-H_wGRt781Vk-unsplash.jpg',
				alt: 'Photo by zachrie friesen',
			},
			{
				id: 3,
				src: 'https://images.unsplash.com/photo-1604778228774-dec9c43c71f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=little-plant-L5Fro0HYy4c-unsplash.jpg',
				alt: 'Photo by little plant',
			},
			{
				id: 4,
				src: 'https://images.unsplash.com/photo-1511869805211-4ff749e15f73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=slim-emcee-W5NNCfT7EFc-unsplash.jpg',
				alt: 'Photo by Slim Emcee',
			},
		],
	};
}

document.addEventListener('alpine:init', () => {
	Alpine.data('carousel', initCarousel);
});
Alpine.start();
