import { render, fireEvent } from '@testing-library/react'
import ProductOverview from '../sections/ProductOverview'
import ShowcaseBottom from '../sections/ShowcaseBottom'

describe( 'Button Tests' , () => {
 
// ----Testing a button at ShowcaseBottom-component:----
    
    it('tests if button contains the correct text', () => {
        const { getByTestId } = render(<ShowcaseBottom />)
        
        const shopNow = getByTestId('test-shop-now').textContent

        expect(shopNow).toEqual('SHOP NOW')
    })

// ----Testing buttons at ProductOverview-component:----
    // In order to make the tests run, a "fakeProduct" needed to be added as a prop of the ProductOverview-component:
    const fakeProduct ={
        id: "",
        tag: "",
        name: "",
        category: "",
        price: 0,
        imageName: ""
    }

    it('tests if size buttons contains the corresponding text: S, M, L, XL', () => {
        const { getByTestId } = render(<ProductOverview productInfo={fakeProduct} />)
        
        const valueS = getByTestId('sSize').textContent
        const valueM = getByTestId('mSize').textContent
        const valueL = getByTestId('lSize').textContent
        const valueXL = getByTestId('xlSize').textContent
        
        expect(valueS).toEqual('S')
        expect(valueM).toEqual('M')
        expect(valueL).toEqual('L')
        expect(valueXL).toEqual('XL')
    })

    it('tests if the class "size-button-dark" is added when the S size button is clicked', () => {
        const { getByRole, getByTestId } = render(<ProductOverview productInfo={fakeProduct} />)
        const sButton = getByRole('button', {name: 'S'})
        
        fireEvent.click(sButton)
        const classNameS = getByTestId('sSize').className

        expect(classNameS).toEqual('size-button me-2 size-button-dark')
    })

    it(`test if all other size button's classes doesn't contain the "size-button-dark" class, when S size buttons is clicked `, () => {
        const { getByRole, getByTestId } = render(<ProductOverview productInfo={fakeProduct} />)
        const sButton = getByRole('button', {name: 'S'})
        
        fireEvent.click(sButton)
        const classNameS = getByTestId('sSize').className
        const classNameM = getByTestId('mSize').className
        const classNameL = getByTestId('lSize').className
        const classNameXL = getByTestId('xlSize').className

        expect(classNameS).toEqual('size-button me-2 size-button-dark')
        expect(classNameM).toEqual('size-button me-2 ')
        expect(classNameL).toEqual('size-button me-2 ')
        expect(classNameXL).toEqual('size-button ')
    })
    
})