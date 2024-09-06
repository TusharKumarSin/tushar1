
import pandas as pd
import numpy as np
import pickle
from sklearn.decomposition import PCA

import streamlit as st
from PIL import Image  # Import the Image class from PIL
import joblib
import cv2
from streamlit_option_menu import option_menu

Diabetes=pickle.load(open('C:/Users/tusha/OneDrive/Desktop/Multiple disease prediction models/save models/diabetes_dataset.sav','rb'))
Heart_Disease=pickle.load(open('C:/Users/tusha/OneDrive/Desktop/Multiple disease prediction models/save models/Heart Disease.sav','rb'))
Parkinsons_Disease=pickle.load(open('C:/Users/tusha/OneDrive/Desktop/Multiple disease prediction models/save models/parkinsons_model .sav','rb'))
BrainTumer=pickle.load(open('C:/Users/tusha/OneDrive/Desktop/Multiple disease prediction models/save models/Branin Tumer (1).sav','rb'))


with st.sidebar:
    selected=option_menu('Multiple Disease detection using ML',['Diabetes prediction',
                                                                'Heart Disease Prediction',
                                                                  'Parkinsons Disease','Brain Tumer'],
                                                                   icons=['activity','heart','person','egg-fried'],
                                                                   default_index=0)
if(selected=='Diabetes prediction'):
    st.title('Diabetes prediction Using ML')
    Pregnancies=st.text_input('Enter the numnbers pregnancises if you are female else enter Zero ')
    Glucose=st.text_input('Enter the Glucose Level  ')
    BloodPressure=st.text_input('Enter the Blood Pressure Level ')
    SkinThickness=st.text_input('Enter the Skin Thickness Level')
    Insulin=st.text_input('Enter the Insulin Level ')
    BMI=st.text_input('Enter the BMI Level ')
    DiabetesPedigreeFunction=st.text_input('Enter the Diabetes Pedigree Function Level ')
    Age=st.text_input('Enter your Age ')
    diab_dignosis=''
    if st.button('Diabetes Test Result'):
        
        prediction=Diabetes.predict([[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]])
        if (prediction[0]==0):
            diab_dignosis="The person is Non-Diabetic"
        else:
             diab_dignosis="""The person is Diabetic! , He/She required:
                 
                              Metformin: Often the first-line treatment, helps lower glucose production in the liver.
                              Sulfonylureas: Stimulate the pancreas to produce more insulin (e.g., Glipizide, Glyburide).
                              SGLT2 Inhibitors: Help the kidneys remove glucose from the body (e.g., Canagliflozin, Dapagliflozin).
                             DPP-4 Inhibitors: Help increase insulin production and decrease glucose production (e.g., Sitagliptin, Saxagliptin).
                             GLP-1 Receptor Agonists: Help increase insulin and decrease appetite (e.g., Exenatide, Liraglutide).
                            Thiazolidinediones: Help insulin work better in muscle and fat (e.g., Pioglitazone, Rosiglitazone).
                            Insulin: May be required if other medications do not control blood sugar effectively.
                 
                          Lifestyle Considerations:
                              
                              Diet: Low in carbohydrates, rich in fiber.
                              Exercise: Regular physical activity to help manage blood sugar levels.
                              Regular Monitoring: Blood sugar levels should be regularly monitoring."""
    st.success( diab_dignosis)
if(selected=='Heart Disease Prediction'):
    st.title('Heart Disease Prediction')
    age=st.text_input('Enter your Age ')
    sex=st.text_input('Enter your sex if you are mail press 1 , if you are girl press 0  ')
    cp=st.text_input('Enter 1 if you have chest pain else 0  ')
    trestbps=st.text_input('Your Resting Blood pressure is  ')
    chol=st.text_input('serum cholestoral in mg/dl')
    fbs=st.text_input('fasting blood sugar > 120 mg/dl')
    restecg=st.text_input('resting electrocardiographic results (values 0,1,2)')
    thalach=st.text_input('maximum heart rate achieved')
    exang=st.text_input('exercise induced angina')
    oldpeak=st.text_input('oldpeak = ST depression induced by exercise relative to rest')
    slope=st.text_input('The slope of the peak exercise ST segment')
    ca=st.text_input('Number of major vessels (0-3) colored by flourosopy')
    thal=st.text_input('Thal: 0 = normal; 1 = fixed defect; 2 = reversable defect')
    heart_dignosis=''
    if st.button('Heart Disease Test Result'):
        prediction=Heart_Disease.predict([[int(age),int(sex),int(cp),int(trestbps),int(chol),int(fbs),int(restecg),int(thalach),int(exang),float(oldpeak),int(slope),int(ca),int(thal)]])
        if (prediction[0]==0):
            heart_dignosis="The person does not have Heart Disease"
        else:
            heart_dignosis="""The person have Heart Disease He/she requires:
            1. Antiplatelet Agents

            Aspirin: Helps prevent blood clots by reducing the clumping action of platelets.
            Clopidogrel (Plavix): Another antiplatelet drug often used for patients who have had a heart attack or stroke.

            2. ACE Inhibitors

            Lisinopril: Lowers blood pressure and reduces the workload on the heart.
            Enalapril: Used to treat high blood pressure and heart failure by relaxing blood vessels.
            Losartan: Similar to ACE inhibitors but works by blocking the effects of angiotensin II.
            3. ACE Inhibitors

            Valsartan: Used when ACE inhibitors are not tolerated, also reduces blood pressure.
            Metoprolol: Slows the heart rate and reduces blood pressure, easing the heart's workload.

            4. Beta-Blockers

            Atenolol: Often used to treat high blood pressure, angina, and after a heart attack.
            Metoprolol: Slows the heart rate and reduces blood pressure, easing the heart's workload.
            
            5. Calcium Channel Blockers
            
            Amlodipine: Relaxes the blood vessels and increases the supply of blood and oxygen to the heart.
            Diltiazem: Used to treat high blood pressure, chest pain (angina), and certain heart rhythm disorders.
            
            6.Diuretics
            
            Furosemide (Lasix): Helps the body get rid of excess fluid, reducing blood pressure and the heart’s workload.
            Spironolactone: Often used in heart failure patients to reduce fluid buildup.
            
            7. Cholesterol-Lowering Drugs (Statins)

            Atorvastatin (Lipitor): Lowers LDL cholesterol, which can reduce the risk of heart attacks.
            Simvastatin (Zocor): Another statin used to lower cholesterol and triglyceride levels.
            
          8. Nitrates
             Nitroglycerin: Used to treat angina by widening blood vessels and increasing blood flow to the heart.
             
          9. Anticoagulants (Blood Thinners)

             Warfarin (Coumadin): Helps prevent blood clots by thinning the blood.
             Rivaroxaban (Xarelto): A newer blood thinner used to reduce the risk of stroke and blood clots.
             
          10. Digitalis Preparations

            Digoxin: Increases the strength of heart muscle contractions and slows the heart rate, often used in heart failure patients."""
    st.success(heart_dignosis)
if(selected=='Parkinsons Disease'):
    st.title('Parkinsons Disease detection using ML')
    #name=st.text_input('Enter a name ')
    MDVP=st.text_input('MDVP:Fo(Hz) ')
    MDVPFhi=st.text_input(' MDVP:Fhi(Hz)')
    MDVPFlo=st.text_input(' MDVP:Flo(Hz)')
    MDVPJitter=st.text_input(' MDVP:Jitter(%)')
    MDVPJitterAbs=st.text_input('MDVP:Jitter(Abs)')
    MDVPRAP=st.text_input(' MDVP:RAP')
    MDVPPPQ=st.text_input(' MDVP:PPQ')
    JitterDDP=st.text_input('Jitter:DDP ')
    MDVPShimmer=st.text_input('MDVP:Shimmer ')
    MDVPShimmerdB=st.text_input('MDVP:Shimmer(dB)') 
    ShimmerAPQ3=st.text_input(' Shimmer:APQ3')
    ShimmerAPQ5=st.text_input(' Shimmer:APQ5')
    MDVPAPQ=st.text_input(' MDVP:APQ ')
    ShimmerDDA=st.text_input(' Shimmer:DDA')
    NHR=st.text_input('Measures of the ratio of noise to tonal components in the voice')
    HNR=st.text_input('Second measures of the ratio of noise to tonal components in the voice')
    RPDE=st.text_input('Nonlinear dynamical complexity measures')
    DFA=st.text_input('Signal fractal scaling exponent')
    spread1=st.text_input('First nonlinear measures of fundamental frequency variation')
    spread2=st.text_input('Second nonlinear measures of fundamental frequency variation')
    D2=st.text_input('Second nonlinear dynamical complexity measures')
    PEE=st.text_input('Third nonlinear measures of fundamental frequency variation')
    parkinson_disease=""
    if st.button('Parkinson Disease Test Result'):
        prediction=Parkinsons_Disease.predict([[MDVP, MDVPFhi, MDVPFlo,MDVPJitter, MDVPRAP, MDVPPPQ,JitterDDP,MDVPShimmer, MDVPShimmerdB,ShimmerAPQ3,ShimmerAPQ5,MDVPAPQ, ShimmerDDA, NHR,HNR, RPDE,DFA,spread1,spread2, D2,PEE]])
        if (prediction[0]==0):
            parkinson_disease="The person does not have Parkinsons Disease "
        else:
            parkinson_disease="The person does  have Parkinsons Disease "
    st.success( parkinson_disease)
if(selected=='Brain Tumer'):
    def preprocess_image(image):
    # Example: Convert the image to a numpy array and resize it
    # according to the model's input size, say (224, 224)
     image = image.resize((265, 265))
     image_array = np.array(image)
     image_array = image_array / 255.0  # Normalize pixel values to [0, 1]
     image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
     return image_array

    st.title("Brain Tumor Detection using SVM")
    uploaded_file = st.file_uploader("Choose an MRI Image", type=["jpg", "png", "jpeg"])

    if uploaded_file is not None:
        image = Image.open(uploaded_file)
        
        # Display the uploaded image
        st.image(image, caption="Uploaded MRI Image", use_column_width=True)
        
        # Run prediction
        if st.button('Predict'):
            result = preprocess_image(image)
            
            if (result == 1).any():
                st.write("""Prediction: Tumor Detected He\She may require:
                         
                             Chemotherapy Drugs
                                 Temozolomide (Temodar): A standard chemotherapy drug for certain types of brain tumors, especially glioblastomas.
                                 Carmustine (BCNU) & Lomustine (CCNU): Nitrosourea drugs that can cross the blood-brain barrier and are used in treating brain tumors.
                                 Bevacizumab (Avastin): An anti-angiogenic drug that inhibits the growth of blood vessels that feed tumors.


                              Corticosteroids

                                  Dexamethasone: Often used to reduce swelling (edema) in the brain caused by the tumor or after surgery, helping alleviate symptoms like headaches and nausea.

                             Anticonvulsants
                                   Levetiracetam (Keppra), Phenytoin (Dilantin): Used to control seizures, which can be a symptom of brain tumors.


                             Targeted Therapy
                             
                                   Everolimus (Afinitor): A targeted therapy used in certain types of brain tumors like subependymal giant cell astrocytomas.
                                   Dabrafenib (Tafinlar) & Trametinib (Mekinist): Used in tumors with specific genetic mutations (BRAF mutations).

                          Hormonal Treatments
                               In some cases, hormone therapy may be used for tumors that respond to hormonal changes, such as pituitary tumors.

                            Treatment depends on the type, size, and location of the tumor, as well as the patient’s overall health. Consulting a neuro-oncologist or oncologist for personalized treatment is crucial.""")
            else:
                st.write("Prediction: No Tumor Detected")
    



  
    
    
    



  
    
    



  
    
    
    



  
    
    