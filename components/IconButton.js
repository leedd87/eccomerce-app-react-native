import { Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { COLORS } from '../constants'

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				...containerStyle,
			}}>
			<Image
				source={icon}
				resizeMode="contain"
				style={{
					width: 30,
					height: 30,
					tintColor: COLORS.white,
					...iconStyle,
				}}
			/>
		</TouchableOpacity>
	)
}

export default IconButton
