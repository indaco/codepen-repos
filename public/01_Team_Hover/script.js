function teamHover() {
	return {
		active: 0,
		members: [
			{
				id: 1,
				name: 'Leslie Alexander',
				role: 'Co-Founder / CEO',
				picture:
					'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=KhFm8xbAom&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				id: 2,
				name: 'Michael Foster',
				role: 'Co-Founder / CTO',
				picture:
					'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=KhFm8xbAom&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				id: 3,
				name: 'Dries Vincent',
				role: 'Business Relations',
				picture:
					'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=KhFm8xbAom&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				id: 4,
				name: 'Lindsay Walton',
				role: 'Front-end Developer',
				picture:
					'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=KhFm8xbAom&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				id: 5,
				name: 'Courtney Henry',
				role: 'Designer',
				picture:
					'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=KhFm8xbAom&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				id: 6,
				name: 'Tom Cook',
				role: 'Product Development',
				picture:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=KhFm8xbAom&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
		profile: {
			['@mouseenter'](event) {
				const elem = event.target;
				this.active = Array.from(this.$refs.team.children).indexOf(elem);
				//elem.classList.add('hover:rotate-1');
				//const name = this.$refs.profiles.children[this.active].children[1];
			},
			['@mouseleave'](event) {
				this.active = 0;
				const elem = event.target;
			},
		},
	};
}
