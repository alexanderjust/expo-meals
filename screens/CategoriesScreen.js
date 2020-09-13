import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function CategoriesScreen(props) {

    return (
<View style={styles.screen}>
    <Text>The Categories screen!</Text>
    <Button title='Go to meals!' onPress={() => {
        props.navigation.navigate({
            routeName: 'CategoryMeals'
        })
        // props.navigation.navigate('CategoryMeals') <--- also works
    }} />
</View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoriesScreen
