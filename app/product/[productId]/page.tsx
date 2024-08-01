import { product } from "@/utils/proudct";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "../ListRating";

interface Iparams{
    productId: string;
}

const page = ({params} : {params: Iparams}) => {
    
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