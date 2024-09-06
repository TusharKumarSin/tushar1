# -*- coding: utf-8 -*-
"""
Created on Mon Aug 12 16:43:54 2024

@author: tusha
"""

import numpy as np
import pickle
import streamlit as st
load_modle=pickle.load(open('C:/Users/tusha/OneDrive/Desktop/Multiple disease prediction models/save models/diabetes_dataset.sav','rb'))
def diabetes_prediction(input_data):
    
    input_data_as_array=np.asarray(input_data)
    input_data_reshaped=input_data_as_array.reshape(1,-1)
    prediction=load_modle.predict(input_data_reshaped)
    print(prediction)
    if (prediction[0]==0):
       return "The person is Non-Diabetic"
    else:
        return """The person is Diabetic! , He/She required
                 Metformin: Often the first-line treatment, helps lower glucose production in the liver.
                 Sulfonylureas: Stimulate the pancreas to produce more insulin (e.g., Glipizide, Glyburide).
                 SGLT2 Inhibitors: Help the kidneys remove glucose from the body (e.g., Canagliflozin, Dapagliflozin).
                 DPP-4 Inhibitors: Help increase insulin production and decrease glucose production (e.g., Sitagliptin, Saxagliptin).
                GLP-1 Receptor Agonists: Help increase insulin and decrease appetite (e.g., Exenatide, Liraglutide).
                Thiazolidinediones: Help insulin work better in muscle and fat (e.g., Pioglitazone, Rosiglitazone).
                Insulin: May be required if other medications do not control blood sugar effectively.
            
              Lifestyle Considerations
                        Diet: Low in carbohydrates, rich in fiber.
                        Exercise: Regular physical activity to help manage blood sugar levels.
                        Regular Monitoring: Blood sugar levels should be regularly monitoring."""
                        
def main():
    st.title("Shubham ka jal para")
    Pregnancies=st.text_input('Enter the numnbers pregnancises= ')
    st.title("shubham")
    Glucose=st.text_input('Enter the Glucose Level = ')
    BloodPressure=st.text_input('Enter the Blood Pressure Level = ')
    SkinThickness=st.text_input('Enter the Skin Thickness Level = ')
    Insulin=st.text_input('Enter the Insulin Level= ')
    BMI=st.text_input('Enter the BMI Level = ')
    DiabetesPedigreeFunction=st.text_input('Enter the Diabetes Pedigree Function Level = ')
    Age=st.text_input('Enter your Age = ')

    diagnosis=''
    if st.button('Diabetes Test Result'):
         diagnosis=diabetes_prediction([Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age])
    st.success(diagnosis)
if __name__=="__main__":
    main()

    