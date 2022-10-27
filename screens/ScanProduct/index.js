import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { IconButton, TextButton } from '../../components'
import { COLORS, SIZES, FONTS, icons, constants, images } from '../../constants'

const ScanProduct = () => {
	const [selectedOption, setSelectedOption] = React.useState(
		constants.scan_product_option.camera //esto es un String => 'CAMERA'
	)

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
				}}></View>
		)
	}
	return (
		<View style={{ flex: 1 }}>
			{/* Header */}
			{renderHeader()}
		</View>
	)
}

export default ScanProduct
