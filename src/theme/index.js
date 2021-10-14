export const defaultTheme = {
	name: 'agroceo',
	roundness: 8,
	colors: {
		primary: '#03B562',
		primaryVariant: '#F39200',
		secondary: '#EA690A',
		secondaryAccent: '#FBC626',
		background: '#FFFFFF',
		surface: '#F5F5F7',
		success: '#018849',
		error: '#ED1C24',
		errorLight: '#EF4967',
		auxiliar: '#EB1F44',
		alert: '#FFD400',
		neutral: '#EBEBEB',
		neutral0: '#FFFFFF',
		neutral1: '#F5F5F7',
		neutral2: '#E5E5E5',
		neutral3: '#C0C0C0',
		neutral4: '#7C7B7B',
		neutral5: '#212121',
		neutral6: '#A3A3A3',
		neutralDark: '#525252',
		darkerGreen: '#02733E',
		greenLight: '#7AC743',
    events: {
      onHover: 'rgba(255, 255, 255, 0.3)',
	  onHoverSubmenu: 'rgba(4, 241, 130, 0.3)',
	  onHoverPrimaryButton: 'rgba(3, 181, 98, 0.9)',
    },
	},
	text: {
		size: {
			h1: '96px',
			h2: '64px',
			h3: '48px',
			h4: '32px',
			h5: '24px',
			large: '18px',
			medium: '16px',
			normal: '14px',
			small: '13px',
			caption: '12px',
			extraSmall: '11px',
			mini: '10px',
			label: '7px',
		},
		type: {
			lineThrough: 'line-through',
			underline: 'underline',
		},
		fontFamily: {
			bold: 'Inter-Bold',
			regular: 'Inter',
		},
		weight: {
			thin: 200,
			normal: 400,
      		semiBold: 500,
			bold: 700,
		},
	},
	fonts: {
		regular: 'Inter-Regular',
	},
	animation: {
		scale: 1.0,
	},
	borderRadius: {
		sm: '2px',
		md: '5px',
		lg: '10px',
		xl: '10em',
	},
	padding: {
		sm: '4px',
		md: '8px',
		lg: '12px',
		xg: '20px',
	},
	margin: {
		sm: '4px',
		md: '8px',
		lg: '12px',
		lg2: '18px',
    	xg: '24px',
		exg: '32px',
	},
	opacity: {
		low: '.9',
		medium: '.5',
		high: '.2',
	},
	border: {
		buttonSuccess: `2px solid #005500`,
		buttonError: `2px solid #550000`,
		header: `1px solid #EBEBEB`,
		menu:  `1px solid #FFFFFF`,
		input: `1px solid #A3A3A3`,
	},
	align: {
		center: 'center',
		spaceAround: 'space-around',
		spaceBetween: 'space-between',
		flexEnd: 'flex-end',
	},
  width: {
    sidebarOpen: '256px',
    sidebarClosed: '97px',
	subSidebar: '206px',
	globalWidthOpen: '270px',
	globalWidthClosed: '105px',
	actionButtons: '130px',
  },
  height: {
	input: '40px',
  }
};
