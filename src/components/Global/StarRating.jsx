import { Star} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStarHalfAlt as half } from '@fortawesome/free-solid-svg-icons'
function StarRating({rating}) {
    if (!Number.isFinite(rating)) return null; 
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div className="flex text-yellow-200">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} size={22} fill="currentColor"  />
            ))}
            {hasHalfStar && <FontAwesomeIcon icon={half} className='w-[22px] h-[22px]'/>}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} size={22} />
            ))}
        </div>
    );
    
}

export default StarRating
