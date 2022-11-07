import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { IconButton, TextButton } from '../../components'
import { COLORS, SIZES, FONTS, icons, constants, images } from '../../constants'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const ScanProduct = ({ navigation }) => {
	const [selectedOption, setSelectedOption] = React.useState(
		constants.scan_product_option.camera //esto es un String => 'CAMERA'
	)
	//Camera
	const devices = useCameraDevices()
	const device = devices.back

	React.useEffect(() => {
		requestCameraPermission()
	}, [])

	const requestCameraPermission = React.useCallback(async () => {
		const permission = await Camera.requestCameraPermission()

		if (permission === 'denied') await Linking.openSettings()
	}, [])

	//Render
	function renderHeader() {
		return (
			<View
				style={{
					flexDirection: 'row',
					paddingTop: SIZES.padding * 2,
					paddingBottom: SIZES.radius,
					paddingHorizontal: SIZES.padding,
					alignItems: 'center',
					backgroundColor: COLORS.light,
					zIndex: 1,
				}}>
				{/* Close */}
				<IconButton
					icon={icons.close}
					onPress={() => navigation.goBack()}
				/>
				{/* Title */}
				<Text
					style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.h2 }}>
					{selectedOption == constants.scan_product_option.camera
						? 'Scan Camera'
						: 'Scan QR Code'}
				</Text>

				{/* Add Options */}
				<IconButton
					icon={icons.flash}
					containerStyle={{
						marginLeft: SIZES.base,
					}}
					iconStyle={{
						width: 25,
						height: 25,
					}}
				/>
				<IconButton
					icon={icons.question_mark}
					containerStyle={{
						marginLeft: SIZES.base,
					}}
					iconStyle={{
						width: 25,
						height: 25,
					}}
				/>
			</View>
		)
	}

	function renderFooter() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 90,
					paddingTop: SIZES.radius,
					paddingHorizontal: SIZES.radius,
					backgroundColor: COLORS.light,
				}}>
				<TextButton
					label="Scan QR Code"
					contentContainerStyle={{
						flex: 1,
						height: 55,
						borderRadius: SIZES.radius,
						backgroundColor:
							selectedOption == constants.scan_product_option.qr
								? COLORS.primary
								: COLORS.lightGrey,
					}}
					labelStyle={{
						...FONTS.h3,
						color:
							selectedOption == constants.scan_product_option.qr
								? COLORS.secondary
								: COLORS.primary,
					}}
					onPress={() => {
						setSelectedOption(constants.scan_product_option.qr)
					}}
				/>
				<TextButton
					label="Scan Camera"
					contentContainerStyle={{
						flex: 1,
						height: 55,
						marginLeft: SIZES.radius,
						borderRadius: SIZES.radius,
						backgroundColor:
							selectedOption ==
							constants.scan_product_option.camera
								? COLORS.primary
								: COLORS.lightGrey,
					}}
					labelStyle={{
						...FONTS.h3,
						color:
							selectedOption ==
							constants.scan_product_option.camera
								? COLORS.secondary
								: COLORS.primary,
					}}
					onPress={() => {
						setSelectedOption(constants.scan_product_option.camera)
					}}
				/>
			</View>
		)
	}

	function renderCamera() {
		if (device == null) {
			return (
				<View
					style={{
						flex: 1,
					}}
				/>
			)
		} else {
			return (
				<View style={{ flex: 1 }}>
					<Camera
						style={{ flex: 1 }}
						device={device}
						isActive={true}
						enableZoomGesture
					/>
				</View>
			)
		}
	}

	return (
		<View style={{ flex: 1 }}>
			{/* Header */}
			{renderHeader()}

			{/*Camera */}
			{renderCamera()}

			{/*Footer */}
			{renderFooter()}
		</View>
	)
}

export default ScanProduct
