import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { useDynamicAnimation, MotiImage } from 'moti'
import { SIZES, images } from '../../constants'

const Walkthrought2 = ({ animate }) => {
	//Moti initial position
	const motiImage1 = useDynamicAnimation(() => ({
		top: '30%',
		left: '25%',
	}))

	const motiImage2 = useDynamicAnimation(() => ({
		top: '45%',
		left: '15%',
	}))

	const motiImage3 = useDynamicAnimation(() => ({
		top: '58%',
		left: '25%',
	}))

	const motiImage4 = useDynamicAnimation(() => ({
		top: '61%',
		left: '40%',
	}))

	const motiImage5 = useDynamicAnimation(() => ({
		top: '27%',
		left: '50%',
	}))

	React.useEffect(() => {
		if (animate) {
			motiImage1.animateTo({
				top: '20%',
				left: '15%',
			})
		}
	}, [animate])

	return (
		<View style={{ flex: 1, overflow: 'hidden' }}>
			<Image
				source={images.walkthrough_02_01}
				style={{
					...styles.image,
					top: '35%',
					left: '35%',
					width: 106,
					height: 161,
					zIndex: 1,
				}}
			/>
			<Image
				source={images.walkthrough_02_02}
				style={{
					...styles.image,
					top: '50%',
					left: '50%',
				}}
			/>

			<MotiImage
				state={motiImage1}
				source={images.walkthrough_02_03}
				style={styles.image}
			/>

			<MotiImage
				state={motiImage2}
				source={images.walkthrough_02_04}
				style={styles.image}
			/>

			<MotiImage
				state={motiImage3}
				source={images.walkthrough_02_05}
				style={styles.image}
			/>

			<MotiImage
				state={motiImage4}
				source={images.walkthrough_02_06}
				style={styles.image}
			/>

			<MotiImage
				state={motiImage5}
				source={images.walkthrough_02_07}
				style={styles.image}
			/>
		</View>
	)
}

export default Walkthrought2

const styles = StyleSheet.create({
	image: {
		position: 'absolute',
		width: 86,
		height: 112,
		zIndex: 0,
		borderRadius: SIZES.radius,
	},
})
