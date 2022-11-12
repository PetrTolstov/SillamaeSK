export const Arrow = ({direction, color = "black"}: {direction: ArrowDirection, color?: string}) => {
	switch (direction) {
		case ArrowDirection.UP: {
			return (
				<svg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M5.75843 0.878906L10.6397 6.51527L0.8772 6.51527L5.75843 0.878906Z' fill={color} />
				</svg>
			);
		}
		case ArrowDirection.LEFT: {
			return (
				<svg width='6' height='11' viewBox='0 0 6 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M0.000976316 5.63707L5.63734 0.75584L5.63734 10.5183L0.000976316 5.63707Z' fill={color} />
				</svg>
			);
		}
		case ArrowDirection.RIGHT: {
			return (
				<svg width='7' height='11' viewBox='0 0 7 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M6.5166 5.63636L0.880238 10.5176L0.880238 0.755129L6.5166 5.63636Z' fill={color} />
				</svg>
			);
		}
		case ArrowDirection.DOWN: {
			return (
				<svg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M5.75914 6.39453L0.87791 0.758169L10.6404 0.758168L5.75914 6.39453Z' fill={color} />
				</svg>
			);
		}
	}
};

export enum ArrowDirection {
	UP,
	DOWN,
	LEFT,
	RIGHT,
}
