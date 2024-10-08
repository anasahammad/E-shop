
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "../ListRating";
import { products } from "@/utils/products";

interface Iparams{
    productId: string;
}

const page = ({params} : {params: Iparams}) => {
    const product = products.find((item=>item.id=== params.productId))
    return (
        <div className="p-8">
           <Container> <ProductDetails product={product}/>
            <div className="flex flex-col gap-4 mt-20">
                <div>Add Rating</div>
                <ListRating product={product}/>
            </div>
           </Container>
        </div>
    );
};

export default page;