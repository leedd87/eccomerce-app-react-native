import React from 'react'
import {
	View,
	Text,
	Image,
	Modal,
	FlatList,
	TouchableOpacity,
	TouchableNativeFeedback,
	StyleSheet,
} from 'react-native'
import { MotiView, useAnimationState } from 'moti'
//import { useAnimationState } from 'moti' //UseAnimationState
import { Shadow } from 'react-native-shadow-2'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { TextButton } from '../../components'
import { icons, images, COLORS, FONTS, SIZES } from '../../constants'

const AutMain = () => {
	const [mode, setMode] = React.useState('signIn')

	//Animation States
	const animationState = useAnimationState({
		signIn: {
			height: SIZES.height * 0.55,
		},
		signUp: {
			height: SIZES.height * 0.7,
		},
	})

	React.useEffect(() => {
		animationState.transitionTo('signIn')
	}, [])

	//Render
	function renderSignIn() {
		return (
			<MotiView
				state={animationState}
				style={{
					marginTop: SIZES.padding,
					height: SIZES.height * 0.55,
				}}>
				<Shadow>
					<View style={styles.authContainer}>
						<Text
							style={{
								width: '60%',
								lineHeight: 45,
								color: COLORS.dark,
								...FONTS.h1,
							}}>
							Sign in to continue
						</Text>
						<KeyboardAwareScrollView
							enableOnAndroid={true}
							keyboardDismissMode="on-drag"
							keyboardShouldPersistTaps={'handled'}
							extraScrollHeight={-300}
							contentContainerStyle={{
								flexGrow: 1,
								justifyContent: 'center',
							}}></KeyboardAwareScrollView>
					</View>
				</Shadow>
			</MotiView>
		)
	}

	function renderSignUp() {
		return (
			<MotiView
				state={animationState}
				style={{
					marginTop: SIZES.padding,
				}}>
				<Shadow>
					<View style={styles.authContainer}></View>
				</Shadow>
			</MotiView>
		)
	}

	function renderAuthContainer() {
		if (mode == 'signIn') {
			return renderSignIn()
		} else {
			return renderSignUp()
		}
	}

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: SIZES.padding,
				backgroundColor: COLORS.lightGrey,
			}}>
			{/*Logo */}
			<Image
				source={images.logo}
				style={{
					alignSelf: 'center',
					marginTop: SIZES.padding * 2,
					width: 50,
					height: 50,
				}}
			/>

			{/* Auth Container */}
			<View>{renderAuthContainer()}</View>
			<TextButton
				label="Toggle"
				onPress={() => {
					if (animationState.current === 'signIn') {
						animationState.transitionTo('signUp')
						setMode('signUp')
					} else {
						animationState.transitionTo('signIn')
						setMode('signIn')
					}
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	authContainer: {
		flex: 1,
		width: SIZES.width - SIZES.padding * 2,
		paddingHorizontal: SIZES.padding,
		paddingVertical: SIZES.radius,
		borderRadius: SIZES.radius,
		backgroundColor: COLORS.light,
	},
})

export default AutMain
