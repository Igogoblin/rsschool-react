import {render, screen} from '@testing-library/react';
import Sear from "./Sear";

describe('Sear component',()=>{
    it('Sear renders',()=>{
        render(<Sear />);
        expect(screen.getByPlaceholderText('search'))
        .toBeInTheDocument()
    });
});