import axios from 'axios';

const SERVER_URL = 'http://223.130.138.156:8080';

export async function toggleLike(userId, productId, setIsLiked) {
    if (!userId) {
        return;
    }

    try {
        const response = await axios.post(`${SERVER_URL}/like/${userId}/${productId}/toggle`);
        setIsLiked(response.data);
    } catch (error) {
        console.error('Error toggling like:', error);
    }
}
