
import pandas as pd

data=pd.DataFrame({"Fruits":["Apple","Banana","Cherries","Grapes","Mango","Banana","Cherries","Grapes","Mango","Apple"]})






import category_encoders as ce
encoder=ce.OneHotEncoder(cols='Fruits',handle_unknown='return_nan',return_df=True,use_cat_names=True)
data_encoded = encoder.fit_transform(data)
print(data_encoded)
