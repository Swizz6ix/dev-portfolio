import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap'

function ScrollTop() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        });
    }, []);

    const toTop = () => {
        window.scrollTo({top:0, behavior: "smooth"});
    };
    
  return (
    <section className='position-fixed bottom-4 right-4 top-auto'>
        {" "}
        {showScrollTop && (
            <Container className='floating-lg cursor-pointer'>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info" onClick={toTop}>
                    <i className='fa fa-angle-double-up text-info'></i>
                </div>
            </Container>
        )} {" "}
    </section>
  )
}

export default ScrollTop
