import { product } from "@/utils/proudct";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";

interface Iparams{
    productId: string;
}

const page = ({params} : {params: Iparams}) => {
    
    return (
        <div className="p-8">
           <Container> <ProductDetails product={product}/></Container>
        </div>
    );
};

export default page;