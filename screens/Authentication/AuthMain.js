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
					<View style={styles.authContainer}></View>
				</Shadow>
			</MotiView>
		)
	}

	function renderSignUp() {}

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
