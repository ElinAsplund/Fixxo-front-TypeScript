import { render } from '@testing-library/react'
import ShowcaseBottom from '../sections/ShowcaseBottom'

describe( 'Button text' , () => {

    it('Tests if button contains the correct text', () => {
        const { getByTestId } = render(<ShowcaseBottom />)
        
        const shopNow = getByTestId('test-shop-now').textContent

        expect(shopNow).toEqual('SHOP NOW')
    })
})