import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import { defaultTheme } from '../../theme';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility.js';
import VisibilityOff from '@material-ui/icons/VisibilityOff.js';
import {
	BackgroundImg,
	InputField,
	LoginArea,
	LoginForm,
	LogoArea,
	LogoSvg,
	ContractsArea,
	ContractsDivider,
	Subtitle,
	Title,
	Header,
	InputsArea,
	ActionButtons,
	LoginButton,
} from './styles';

const { colors, text, margin } = defaultTheme;

const useStyles = makeStyles({
	loginButton: {
		'backgroundColor': colors.primary,
		'color': colors.neutral0,
		'textTransform': 'none',
		'marginBottom': margin.md,
		'fontSize': text.size.medium,
		'&:hover': {
			backgroundColor: colors.primary,
			color: colors.neutral0,
			textTransform: 'none',
		},
	},
	forgotPassword: {
		'fontSize': text.size.medium,
		'color': colors.primary,
		'textTransform': 'none',
		'marginLeft': 'auto',
		'marginRight': 0,
		'&:hover': {
			backgroundcolor: 'transparent',
			textTransform: 'none',
		},
	},
	register: {
		fontSize: text.size.medium,
		color: colors.primary,
		textTransform: 'none',
	},
	termsAndPolicies: {
		'fontSize': text.size.medium,
		'textDecoration': 'none',
		'color': colors.neutral3,
		'textTransform': 'none',
		'&:hover': {
			textDecoration: 'underline',
			backgroundColor: 'transparent',
			color: colors.primary,
			textTransform: 'none',
		},
	},
});

const Login = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	});

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	return (
		<BackgroundImg>
			<LoginArea>
				<LoginForm>
					<Header>
						<Title>{t('loginTitle')}</Title>
						<Subtitle>{t('loginSubtitle')}</Subtitle>
					</Header>

					<InputsArea>
						<InputField
							fullWidth
							size='small'
							margin='normal'
							placeholder='(00) 0 0000-0000'
							label={t('phone')}
							type='number'
						/>

						<FormControl
							size='small'
							fullWidth
							margin='normal'
							variant='outlined'
						>
							<InputLabel htmlFor='outlined-adornment-password'>
								{t('password')}
							</InputLabel>
							<OutlinedInput
								placeholder={t('password')}
								id='outlined-adornment-password'
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge='end'
										>
											{values.showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
								label='Password'
							/>
						</FormControl>
						<Button className={classes.forgotPassword}>
							{t('forgotPw')}
						</Button>
					</InputsArea>

					<ActionButtons>
						<LoginButton className={classes.loginButton}>
							{t('signIn')}
						</LoginButton>
						<Button className={classes.register}>
							{t('signUp')}
						</Button>
					</ActionButtons>

					<ContractsArea>
						<ContractsDivider>
							{t('ContractsText')}
							<Button className={classes.termsAndPolicies}>
								{t('TermsnCond')}
							</Button>
							{t('And')}
							<Button className={classes.termsAndPolicies}>
								{t('PrivacyPolicy')}
							</Button>
						</ContractsDivider>
					</ContractsArea>
				</LoginForm>
			</LoginArea>

			<LogoArea>
				<LogoSvg />
			</LogoArea>
		</BackgroundImg>
	);
};

export default Login;
