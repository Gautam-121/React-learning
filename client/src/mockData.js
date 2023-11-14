export const userInput = (values)=>{

    const inputs = [
        {
          id: 1,
          name: "userName",
          type: "text",
          placeholder: "UserName",
          errorMessage : "Username should be 3-16 characters and shouldn't include any special character",
          label: "Username",
          pattern : "^[A-Za-z0-9]{3,16}$",
          required : true
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage : "It should be a valid email address",
          label: "Email",
          required : true
        },
        {
          id: 3,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Birthday",
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage : "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern : "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$",
          required : true
        },
        {
          id: 5,
          name: "comfirmPassword",
          type: "password",
          placeholder: "Comfirm Password",
          errorMessage : "Password don't match!",
          label: "Comfirm Password",
          pattern : values.password,
          required : true
        },
      ];
    
    return inputs
}

export const navList =  [
    {
        id : 1,
        linkOpen : "/search",
        listName : "Search",
        symbol_logo : <i class="fa-solid fa-magnifying-glass"></i>
    },
    {
        id : 2,
        linkOpen : "/offers-near-me",
        listName : "Offers",
        symbol_logo : <i class="fa-solid fa-percent"></i>
    },
    {
        id : 3,
        linkOpen : "/support",
        listName : "Help",
        symbol_logo : <i class="fa-solid fa-life-ring"></i>
    },
    {
        id : 4,
        linkOpen : "",
        listName : "Sign In",
        symbol_logo : <i class="fa-regular fa-user"></i>
    },
    {
        id : 5,
        linkOpen : "/checkout",
        listName : "Cart",
        symbol_logo : <i class="fa-solid fa-cart-shopping"></i>
    },
]

