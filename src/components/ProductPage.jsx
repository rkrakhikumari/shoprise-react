import React, { useState } from 'react';
import prodImg from "../assets/product.png"
import locImg from "../assets/loc.png"
import jeniImg from "../assets/jeni.png"
import clockImg from "../assets/clock.png"
import locationImg from "../assets/location.png"
import heartImg from "../assets/heart.png"

const product = {
  title: 'Trolley sprayer',
  category: 'Farming Tools & Machinery',
  description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added. We ship nationwide.',
  price: 9.99,
  deliveryFee: 13.50,
  location: 'Los Angeles, CA',
  timeAgo: '3 hours ago',
  condition: 'Used like new',
  images: [
    prodImg,
    prodImg,
    prodImg,
    prodImg,
  ],
  seller: {
    name: 'Jennifer Garnet',
    joinDate: 'Oct 2023',
    rating: 5,
    reviewsCount: 10,
    avatar: jeniImg,
  }
};

export default function ProductPage() {

  const [showOfferForm, setShowOfferForm] = useState(false);
  const [offerPrice, setOfferPrice] = useState('');

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const totalPrice = (product.price + product.deliveryFee).toFixed(2);

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .main-content {
            flex-direction: column !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          .left-column, .middle-column, .right-column {
            width: 100% !important;
            flex: none !important;
          }
          .thumbnail-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .seller-info-container {
            gap: 20px !important;
            flex-wrap: wrap !important;
          }
          .checkout-container {
            width: 100% !important;
            margin-top: 20px;
          }
          input[type="text"], input[type="number"] {
            font-size: 16px !important;
          }
          button {
            font-size: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .thumbnail-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .left-column img {
            height: auto !important;
          }
          .seller-info-container {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .seller-info-container > div:last-child {
            align-items: flex-start !important;
          }
          .checkout-container {
            padding: 15px !important;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="border-t border-b border-gray-300 text-[#333333] flex items-center gap-1 py-2 text-l pt-4 pb-4 pl-7">
        <div className='text-[#333333]'>All listing</div>
        <div className="select-none text-[#333333] pl-2 pr-2">{'>'}</div>
        <div className="text-[#1F3A93] font-medium cursor-pointer">Products</div>
      </div>
      {/* Main content */}
      <div
        className="main-content"
        style={{ display: 'flex', margin: 'auto', gap: 20, fontFamily: 'Arial, sans-serif', paddingLeft: 30, paddingTop: 30, paddingRight: 30 }}
      >
        {/* Left: Images */}
        <div className="left-column" style={{ flex: 1 }}>
          <img
            src={selectedImage}
            alt={product.title}
            style={{ width: '100%', borderRadius: 5 }}
          />
          <div
            className="thumbnail-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 10,
              marginTop: 10
            }}
          >
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                style={{
                  width: '100%',
                  height: 80,
                  objectFit: 'cover',
                  borderRadius: 10,
                  cursor: 'pointer',
                  border: selectedImage === img ? '1px solid orange' : '1px solid #ccc',
                }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Middle: Details */}
        <div className="middle-column" style={{ flex: 1.5 }}>
          <div style={{ color: '#333333', fontSize: 18 }}>{product.category}</div>
          <h2 style={{ color: '#FF7F50', marginTop: 0, fontSize: 24 }}>{product.title}</h2>
          <p style={{ fontSize: 14, color: '#333333' }}>Description </p>
          <p style={{ fontSize: 12, color: '#333333' }}>{product.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15, fontSize: 12, color: 'gray', marginTop: 10 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <img src={clockImg} alt="Clock" style={{ width: 14, height: 14 }} />
              {product.timeAgo}
            </span>
            <span style={{ color: '#ccc' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <img src={locationImg} alt="Location" style={{ width: 14, height: 14 }} />
              {product.location}
            </span>
          </div>
          <div style={{
            marginTop: 10,
            font: 14,
            color: '#333333',
            display: 'flex',
            alignItems: 'center',
            gap: 6
          }}>
            <img src={heartImg} alt="heart" />
            Add to favorites
          </div>
          <h3 style={{ color: '#1F3A93', marginTop: 10 }}>
            ${product.price.toFixed(2)} <span style={{ fontSize: 16, color: '#333333' }}>({product.condition})</span>
          </h3>

          {/* Map Image */}
          <div style={{ marginTop: 20 }}>
            <img
              src={locImg}
              alt="Location"
              style={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 8
              }}
            />
          </div>
          {/* Seller info container */}
          <div className="seller-info-container" style={{ marginTop: 20 }}>
            <div style={{ fontWeight: '600', marginBottom: 8 }}>Seller</div>

            <div style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 40,
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  style={{ width: 50, height: 50, borderRadius: '50%' }}
                />
                <div>
                  <div style={{ fontWeight: 500 }}>{product.seller.name}</div>
                  <div style={{ fontSize: 12, color: 'gray' }}>Join {product.seller.joinDate}</div>
                </div>
              </div>
              {/* Right: Stars and Follow button stacked */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ fontSize: 14, color: 'orange', display: 'flex', alignItems: 'center', gap: 2 }}>
                  <span>{'★'.repeat(product.seller.rating)}</span>
                  <span style={{ fontSize: 12, color: '#333' }}>({product.seller.reviewsCount})</span>
                </div>
                <button
                  style={{
                    backgroundColor: '#1F3A93',
                    color: 'white',
                    border: 'none',
                    padding: '6px 20px',
                    borderRadius: 999,
                    fontSize: 14,
                    cursor: 'pointer',
                    marginTop: 6,
                    minWidth: 90,
                    alignSelf: 'flex-end'
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          {/* Message seller */}
          <div style={{ marginTop: 20, paddingBottom: 20 }}>
            <label htmlFor="message" style={{ fontSize: 14, fontWeight: 500 }}>Send a message to the seller</label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 8,
                border: '1px solid #ccc',
                borderRadius: 999,
                backgroundColor: '#fff',
                overflow: 'hidden',
                maxWidth: 400
              }}
            >
              <input
                id="message"
                type="text"
                placeholder="Hello, is this article still available?"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: 14,
                  padding: '8px 12px',
                  borderRadius: 0
                }}
              />
              <button
                style={{
                  backgroundColor: '#1F3A93',
                  color: 'white',
                  border: 'none',
                  borderRadius: 999,
                  padding: '8px 24px',
                  fontSize: 14,
                  cursor: 'pointer'
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        {/* Right: Checkout or Make Offer */}
        <div
          className="checkout-container"
          style={{
            flex: 0.8,
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: 20,
            height: 'fit-content',
            fontSize: 14,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {!showOfferForm ? (
            // === Checkout View ===
            <div>
              <h3 style={{ textAlign: 'center', marginBottom: 20, color: '#333333', fontWeight: 'bold', fontSize: 20 }}>Checkout</h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span>Price</span>
                <span style={{ color: '#1F3A93' }}>${product.price.toFixed(2)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span>Delivery fee</span>
                <span style={{ color: '#1F3A93' }}>${product.deliveryFee.toFixed(2)}</span>
              </div>

              <hr style={{ borderTop: '2px dotted #999', margin: '15px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', fontSize: 18, color: '#333333' }}>
                <span>${totalPrice}</span>
              </div>

              <div style={{ marginTop: 15, display: 'flex', gap: 10 }}>
                <button
                  style={{
                    flex: 1,
                    border: '1px solid #FF7F50',
                    backgroundColor: 'white',
                    color: '#FF7F50',
                    padding: '10px 0',
                    borderRadius: 9999,
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: 14,
                  }}
                >
                  Buy now
                </button>

                <button
                  style={{
                    flex: 1,
                    border: 'none',
                    backgroundColor: 'gray',
                    color: 'white',
                    padding: '10px 0',
                    borderRadius: 9999,
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: 14,
                  }}
                  onClick={() => setShowOfferForm(true)}
                >
                  Make offer
                </button>
              </div>

              <button
                style={{
                  marginTop: 10,
                  width: '100%',
                  backgroundColor: '#1F3A93',
                  color: 'white',
                  border: 'none',
                  padding: '12px 0',
                  borderRadius: 9999,
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: 14,
                }}
              >
                Paypal checkout
              </button>

              <small
                style={{
                  marginTop: 20,
                  color: '#333333',
                  fontSize: 12,
                  lineHeight: 1.4,
                  paddingLeft: 12,
                  paddingRight: 12,
                  textAlign: 'center',
                  display: 'block',
                }}
              >
                By continuing to checkout, you agree to the{' '}
                <a href="#" style={{ color: '#1F3A93', textDecoration: 'underline' }}>Privacy Policy</a>{' '}
                and{' '}
                <a href="#" style={{ color: '#1F3A93', textDecoration: 'underline' }}>Terms of Service</a>.
              </small>
            </div>
          ) : (
            // === Make Offer View ===
            <div>
              <h3 style={{ textAlign: 'center', marginBottom: 20, color: '#333333', fontWeight: 'bold', fontSize: 20 }}>Make offer</h3>

              <label style={{ fontStyle: 'italic' }}>Enter your offer</label>
              <input
                type="number"
                placeholder="$7.46"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                className="placeholder-black"
                style={{
                  width: '100%',
                  padding: 10,
                  border: '1px solid #ccc',
                  borderRadius: 6,
                  marginBottom: 20,
                  marginTop: 5,
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '18px' }}>
                <span>Delivery fee</span>
                <span style={{ color: '#1F3A93', fontWeight: '500', fontSize: '16px' }}>${product.deliveryFee.toFixed(2)}</span>
              </div>

              <hr style={{ borderTop: '1px dashed #ccc', margin: '15px 0' }} />

              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                marginBottom: 10
              }}>
                $20.96
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {/* Make Offer Button */}
                <button
                  style={{
                    height: '44px',
                    backgroundColor: '#1F3A93',
                    color: 'white',
                    border: 'none',
                    borderRadius: '9999px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10px'
                  }}
                  onClick={() => alert(`Offer submitted: $${offerPrice}`)}
                >
                  Make offer
                </button>

                {/* Cancel Button */}
                <button
                  style={{
                    height: '44px',
                    backgroundColor: '#999999',
                    color: 'white',
                    border: 'none',
                    borderRadius: '9999px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'not-allowed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  disabled
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
