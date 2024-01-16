import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Header(){
    return(
        <Card className="flex items-center justify-between p-[1.765rem]">
            <Button variant='outline' size='icon'>
                <MenuIcon />
            </Button>

            <p className="font-bold text-base">Store</p>

            <Button variant='outline' size='icon'>
                <ShoppingCartIcon />
            </Button>
        </Card>
    )
}