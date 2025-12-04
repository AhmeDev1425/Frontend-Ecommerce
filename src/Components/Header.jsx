import { Link } from "react-router-dom"

export default function Header() {
    return(
            
        <>
            <header className="header">
                <div className="header__container">
                <div className="header__top">
                    <div className="header__top-content">
                    <span className="header__promo">Free shipping on orders over $100</span>
                    <div className="header__top-actions">
                        <label for="theme-toggle" className="theme-toggle">
                        <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="5"/>
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                        <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                        </label>
                        <Link to="/login"> <label for="login-modal" className="header__login">Login</label> </Link>
                        <Link to="/register"> <label for="login-modal" className="header__login">Sign up</label> </Link>
                    </div>
                    </div>
                </div>
                
                <nav className="header__main">
                    <div className="header__main-content">
                    <div className="header__logo">
                        <h1>Ahmed</h1>
                    </div>
                    
                    <div className="header__search">
                        <input type="search" placeholder="Search products..." className="header__search-input"/>
                        <button className="header__search-btn">
                        <svg viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>
                        </button>
                    </div>
                    
                    <div className="header__actions">
                        <a href="wishlist.html" className="header__action">
                        <svg viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span className="header__action-count">3</span>
                        </a>
                        <a href="compare.html" className="header__action">
                        <svg viewBox="0 0 24 24">
                            <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM21 11h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"/>
                        </svg>
                        <span className="header__action-count">2</span>
                        </a>
                        <a href="cart.html" className="header__action">
                        <svg viewBox="0 0 24 24">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        <span className="header__action-count">5</span>
                        </a>
                    </div>
                    </div>
                    
                    {/* <div className="mega-menu">
                    <div class="mega-menu__trigger">
                        <span>Categories</span>
                        <svg viewBox="0 0 24 24">
                        <polyline points="6,9 12,15 18,9"/>
                        </svg>
                    </div>
                    <div class="mega-menu__content">
                        <div class="mega-menu__column">
                        <h3>Fashion</h3>
                        <ul>
                            <li><a href="#">Women's Clothing</a></li>
                            <li><a href="#">Men's Clothing</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Shoes</a></li>
                        </ul>
                        </div>
                        <div class="mega-menu__column">
                        <h3>Electronics</h3>
                        <ul>
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Audio</a></li>
                            <li><a href="#">Gaming</a></li>
                        </ul>
                        </div>
                        <div class="mega-menu__column">
                        <h3>Home & Garden</h3>
                        <ul>
                            <li><a href="#">Furniture</a></li>
                            <li><a href="#">Decor</a></li>
                            <li><a href="#">Kitchen</a></li>
                            <li><a href="#">Garden</a></li>
                        </ul>
                        </div>
                    </div>
NameclassName                    </div>   */}
                </nav>
                </div>
            </header>

        </>

    )
    
}