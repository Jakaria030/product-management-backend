# Product Management Backend

**Objective:** Develop a scalable Express.js application using TypeScript, integrating MongoDB with Mongoose for data management, and ensuring data integrity through Zod validation.


### E-commerce Product Data Types

- **name** (string):
    - The name of the product.
- **description** (string):
    - A brief description of the product.
- **price** (number):
    - The price of the product.
- **category** (string):
    - The category to which the product belongs.
- **tags** (array of strings):
    - An array of tags or keywords associated with the product.
- **variants** (array of objects):
    - An array containing different variants or options of the product, such as size, color, or style.
        - **type** (string): The type of variant (e.g., size, color).
        - **value** (string): The specific value of the variant (e.g., "Small", "Red").
- **inventory** (object):
    - An object representing the product's inventory details.
        - **quantity** (number): The available quantity of the product in stock.
        - **inStock** (boolean): Indicates whether the product is currently in stock.


## Product Management

### **1. Create a New Product**

- **Endpoint**: **`/api/products`**
- **Method:** `POST`
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product created successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        }
    }
    ```
    

### **2. Retrieve a List of All Products**

- **Endpoint**: **`/api/products`**
- **Method:** `GET`
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Products fetched successfully!",
        "data": [
            {
                "name": "iPhone 13",
                "description": "A sleek and powerful smartphone with cutting-edge features.",
                "price": 999,
                "category": "Electronics",
                "tags": ["smartphone", "Apple", "iOS"],
                "variants": [
                    {
                        "type": "Color",
                        "value": "Midnight Blue"
                    },
                    {
                        "type": "Storage Capacity",
                        "value": "256GB"
                    }
                ],
                "inventory": {
                    "quantity": 50,
                    "inStock": true
                }
            },
            {
                "name": "Samsung Galaxy S21",
                "description": "High-performance Android smartphone with advanced camera capabilities.",
                "price": 799,
                "category": "Electronics",
                "tags": ["smartphone", "Samsung", "Android"],
                "variants": [
                    {
                        "type": "Color",
                        "value": "Phantom Black"
                    },
                    {
                        "type": "Storage Capacity",
                        "value": "128GB"
                    }
                ],
                "inventory": {
                    "quantity": 30,
                    "inStock": true
                }
            }
            // more products here...
        ]
    }
    ```
    

### **3. Retrieve a Specific Product by ID**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product fetched successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        }
    }
    ```
    

### **4. Update Product Information**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `PUT`**
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product updated successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 49,
                "inStock": true
            }
        }
    }
    ```
    

### **5. Delete a Product**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `DELETE`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product deleted successfully!",
        "data": null
     }
    ```
    

### **6. Search a product**

- **Endpoint**: `/api/products?searchTerm=iphone`
- **Method: GET**
- **Sample Response**:

```jsx
{
    "success": true,
    "message": "Products matching search term 'iphone' fetched successfully!",
    "data": [
        {
            "name": "iPhone 13 Pro",
            "description": "The latest flagship iPhone model with advanced camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "iPhone SE",
            "description": "Compact and affordable iPhone model with powerful performance.",
            "price": 399,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "White"
                },
                {
                    "type": "Storage",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 20,
                "inStock": true
            }
        }
    ]
}
```

## Order Management

### **Order Management API Endpoints**

### **1.Create a New Order**

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**
- **Request Body**:
    
    ```json
    {
        "email": "level2@programming-hero.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
    }
    ```
    
- **Response**:
    
    ```json
    {
        "success": true,
        "message": "Order created successfully!",
        "data": {
            "email": "level2@programming-hero.com",
            "productId": "5fd67e890b60c903cd8544a3",
            "price": 999,
            "quantity": 1
        }
    }
    
    ```
    

### **2.Retrieve All Orders**

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Orders fetched successfully!",
        "data": [
            {
                "email": "level2@programming-hero.com",
                "productId": "5fd67e890b60c903cd8544a3",
                "price": 999,
                "quantity": 1
            }
            // more orders here...
        ]
    }
    ```
    

### **3. Retrieve Orders by User Email**

- **Endpoint**: `/api/orders?email=level2@programming-hero.com`
- **Method:** `GET`
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Orders fetched successfully for user email!",
        "data": [
            {
                "email": "level2@programming-hero.com",
                "productId": "5fd67e890b60c903cd8544a3",
                "price": 999,
                "quantity": 1
            }
            // more orders for the user...
        ]
    }
    ```


## Getting Started
Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Jakaria030/product-management-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd product-management-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add .env file:
   ```bash
   PORT=<add port number>
   MONGODB_URI=<your mongodb uri>
   ```
5. Run the development server:
   ```bash
   npm run start:dev
   ```