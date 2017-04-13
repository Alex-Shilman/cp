import Cars     from './Cars';
import Edmonds  from './Edmonds';

export default function () {
    return {
        cars    : new Cars(),
        edmonds : new Edmonds()
    }
}
