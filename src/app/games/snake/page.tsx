import SnakesGame from "./SnakeGame";
import GuestLayout from "@/components/Layouts/GuestLayout";

const SnakeGameWithWrapper = () => {
    return (
        <GuestLayout showHeader={true}>
            <SnakesGame />
        </GuestLayout>
    )
}

export default SnakeGameWithWrapper;