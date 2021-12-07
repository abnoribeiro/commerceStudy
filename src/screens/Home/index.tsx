import React, {useEffect, useState, memo} from "react";
import {ListRenderItem } from 'react-native';

import Header from "../../components/Header";
import CardList from "../../components/CardList";
import api from "../../services/api";

import {TexTileList} from '../../components/Texts/styled';
import {Container, LineProductsBox,FlatListProduct} from './styled'
import LoadindInit from "../../components/LoadingInit";

interface Props{
    navigation?:{ navigate:(string:string) => {} }
}

export interface Products {
    id?: string,
    title?: string,
    images?: [
        {
            url: string
        }
    ],
    productVariants?: [
        {
            availableDate: string,
            productVariantId: string,
            price: number,
            inventoryItemId: string,
            shortDescription: string,
            title: string,
            published: null,
            volume: string,
            volumeUnit: null,
            description: null,
            subtitle:  string,
            components: []
        }
    ]
}

const Home: React.FC<Props> = ({ navigation })=>{
    const [products, setProducts] = useState<Products[]>([])
    const [categories, setCategories] = useState<string[]>([])
    const [showLoading, setShowLoading] = useState(false)

    const getProducts = async()=>{
        await api.get(`/products.json`)
        .then(async(data) => {
            getProductsCategories(data.data.data.poc.products)
        }).catch((err)=>{
            console.log(err)
        })
    };

    const getProductsCategories = async(arrayProducts:Products[])=>{
        let keyCategorys:string[] = [];

        const removeNullCategory = arrayProducts.filter((produtoCurrent:Products)=>{
            if(produtoCurrent.productVariants[0].subtitle){
                keyCategorys.push(produtoCurrent.productVariants[0].subtitle)
                return arrayProducts
            }
        });
        
        const productsForCategory = removeNullCategory.reduce((productsForCategory:any, produtoCurrent:Products)=>{
            productsForCategory[produtoCurrent.productVariants[0].subtitle] = productsForCategory[produtoCurrent.productVariants[0].subtitle] || [];
            productsForCategory[produtoCurrent.productVariants[0].subtitle].push(produtoCurrent)
            
            return productsForCategory
        },{});
        
        setCategories([...new Set(keyCategorys)])
        setProducts(productsForCategory)
        setShowLoading(true)
    };

    useEffect(() => {
        getProducts()
    }, [])   
    
    const renderItemProducts:ListRenderItem<Products> = ({item}) => (
        <CardList 
            id={item.id}
            title={item.title}
            images={item.images}
            productVariants={item.productVariants}
        />
    );
    const renderItemCategory:ListRenderItem<any> = ({item}) => (
        <>
            <TexTileList>{item}</TexTileList>
            <FlatListProduct<any>
                data={products[item]}
                renderItem={renderItemProducts}
                horizontal={true}
            />
        </>
    );

    if(!showLoading){
        return(<LoadindInit/>)
    }

    return (
        <Container>
            <Header 
                pageName={"Home"}
                navigation={navigation}
            />
            <LineProductsBox>
                <FlatListProduct<any>
                    data={categories}
                    renderItem={renderItemCategory}
                />
            </LineProductsBox>
        </Container>
    ) 
}

export default Home;