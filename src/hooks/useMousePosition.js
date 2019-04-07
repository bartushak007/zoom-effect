import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const initialCoords = {
        x: 0,
        y: 0,
    };

    const [ coords, setCoords ] = useState(initialCoords);
};

export default withMousePosition;