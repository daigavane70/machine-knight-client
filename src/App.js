import { Field, Formik } from "formik";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { typesMapping } from "./utils/mappings";

function App() {
  const [filters, setFilters] = useState({});

  const l1 = [
    " Vibhutipura. Tata Sherwood Road.Bengaluru, Karnataka 560037",
    "#11, Lavnya apartment, 2nd main, 2nd Cross nagaraj layout, kaveryappa layout, Kaverappa Layout, Kadubeesanahalli, Bengaluru, Karnataka 560103, India,Bengaluru",
    ", Hoodi",
    "10th B Cross Road,Bengaluru",
    "112, 2nd Cross Rd, Sri Nivasa Reddy Layout, AECS Layout, Marathahalli, Bengaluru, Karnataka 560037, India,Bengaluru",
    "124, 1st Cross Rd, Bharathi Layout, Venkateshwara Layout, Suddagunte Palya, Bengaluru, Karnataka 560029, India,Bengaluru",
    "12th Cross, Kalappa Layout, Rasanna Colony, Vibhutipura, Bengaluru, Karnataka 560037, India,Bengaluru",
    "13th Cross, Manjunatha Layout, Munnekollal, Bengaluru, Karnataka 560037, India,Bengaluru",
    "141, 7th Cross Road, Stage 2, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038, India,Bengaluru",
    "165, 22nd Main Rd, Lakshmi Layout, MCHS Colony, Stage 2, BTM Layout, Bengaluru, Karnataka 560076, India,Bengaluru",
    "183, 4th Main Road, Maithri Layout, Kadugodi",
    "1st Block Koramangala",
    "1st Block Koramangala,HSR Layout 5th Sector",
    "1st Phase JP Nagar",
    "1st Phase, JP Nagar",
    "1st Phase,JP Nagar",
    "1st Sector, HSR Layout",
    "1st Sector, HSR Layout, Bengaluru, Karnataka, India",
    "1st Sector,HSR Layout",
    "1st Stage, BTM Layout",
    "1st Stage, BTM Layout 1",
    "1st Stage,BTM Layout",
    "1st Stage,BTM Layout 1",
    "2A Cross Road, Rajasree Layout, Gandhi Nagar, Munnekollal",
    "2nd Phase JP Nagar",
    "2nd Phase, JP Nagar",
    "2nd Phase, JP Nagar,",
    "3, Kathriguppa Main Rd, ITI Layout, Banashankari 3rd Stage, Banashankari",
    "377, 11th Main Rd, Teacher&#39;s Colony, Jakkasandra, Sector 7, HSR Layout, Bengaluru, Karnataka 560034, India,Bengaluru",
    "3G Homes Crimson Layout,Kadugodi",
    "3rd Phase, JP Nagar",
    "45, 1st A Main Road,Bengaluru",
    "529 12th main 9th cross bsk 3rd stage",
    "5th Phase, J P Nagar Phase 5,",
    "5th Phase, JP Nagar",
    "6th Block, Bellandur",
    "6th Block,Koramangala",
    "9th Block Jayanagara, Jayanagar, Bengaluru, Karnataka, India",
    "AECS Layout",
    "AECS Layout - C Block",
    "AECS Layout, Kundalahalli, Brookefield, Bengaluru, Karnataka, India",
    "AECS Layout, Marathahalli",
    "AECS Layout, Marathahalli, Bengaluru, Karnataka, India",
    "AECS Layout,Marathahalli",
    "AGS  layout next to poornapragna layout",
    "AK Colony,Adugodi",
    "Adarsh Palm Retreat, Bellandur",
    "Adarsh Palm Retreat,Bellandur",
    "Adithya Elan, New Temple Road, Nallurhalli, Whitefield, Bengaluru, Karnataka, India",
    "Adugodi",
    "Adyar",
    "Agram",
    "Ags Layout, Banashankari, Bengaluru, Karnataka, India",
    "Akash Nagar, A Narayanpura",
    "Akshara Aspire, Vijay Nagar, Whitefield, Bengaluru, Karnataka 560066, India,Bengaluru",
    "Amarajyothi Nagar",
    "Amarjyothi Layout, Domlur",
    "Amarjyoti Layout,Domlur",
    "Ambalipura",
    "Ambalipura Residency Road, PWD Quarters, Bengaluru, Karnataka, India",
    "Ambalipura,Harlur",
    "Ambedkar Nagar,Whitefield",
    "Amblipura",
    "Annapoorneshwari Nagar",
    "Annapurneshwari Nagar",
    "Annasandra Palya",
    "Annasandrapalya",
    "Annasandrapalya Extension",
    "Anubhav Nagar",
    "Arehalli, Bengaluru, Karnataka, India",
    "Ashok Nagar",
    "Ashwini layout",
    "Attiguppe",
    "Austin Town",
    "Ayyappa Nagar,Krishnarajapura",
    "B Narayanapura",
    "B Narayanapura, Mahadevapura",
    "B Narayanapura,Mahadevapura",
    "BEML Layout",
    "BHEL Layout",
    "BSK 2nd Stage",
    "BSK 3rd Stage",
    "BSK 3rd Stage, Bengaluru, Karnataka, India",
    "BSK II Stage",
    "BTM",
    "BTM 1st Stage",
    "BTM 2nd Stage",
    "BTM 2nd Stage,",
    "BTM 2nd Stage, Bengaluru, Karnataka, India",
    "BTM Layout",
    "BTM Layout 1",
    "BTM Layout 1st Stage",
    "BTM Layout 2nd Stage",
    "BTM Layout 2nd Stage, Bengaluru, Karnataka, India",
    "BTM Layout Stage 2",
    "BTM Layout,",
    "BTM Layout, 1st Stage",
    "BTM Layout, Bengaluru, Karnataka, India",
    "Balagere",
    "Balagere Road, Lords Steps layout, Balagere",
    "Balagere, Bengaluru, Karnataka, India",
    "Banagirinagara",
    "Banashankari",
    "Banashankari 2nd Stage",
    "Banashankari 3rd Stage",
    "Banashankari 3rd Stage,",
    "Banashankari 3rd Stage, Banashankari",
    "Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka, India",
    "Banashankari 3rd Stage, Hosakerehalli",
    "Banashankari 3rd Stage, No 32 Dsouza nagar behind pesit",
    "Banashankari 3rd Stage,Banashankari",
    "Banashankari Stage 1",
    "Banashankari Stage I",
    "Banashankari Stage I,Banashankari",
    "Banashankari Stage II",
    "Banashankari Stage II, Banashankari",
    "Banashankari Stage II, Banashankari, Bengaluru, Karnataka 560070, India",
    "Banashankari Temple Ward",
    "Banashankari, Bengaluru, Karnataka, India",
    "Banashankri",
    "Banaswadi",
    "Bapuji Nagar",
    "Basavanagar",
    "Basavanagara",
    "Basavanagudi",
    "Basavanagudi, Bengaluru, Karnataka, India",
    "Basavanna Nagar",
    "Basaveshvara Nagar",
    "Basaveshwar Nagar",
    "Basaveshwar Nagar,",
    "Basaveshwara Nagar",
    "Basaveshwaranagar",
    "Basaweshwara Nagar",
    "Battarahalli",
    "Belatur Colony,Brindavan Layout",
    "Bellandur",
    "Bellandur junction, Bellandur Flyover, Adarsh Palm Retreat, Bellandur, Bengaluru, Karnataka 560103, India,Bengaluru",
    "Bellandur, Bengaluru, Karnataka, India",
    "Bennigana Halli",
    "Benson Town",
    "Bharath Housing Society Layout,Banashankari",
    "Bhoganhalli",
    "Bhoganhalli, Bengaluru, Karnataka, India",
    "Bhoganhalli, post: Bellandur, Bengaluru, Karnataka, India",
    "Bhuvaneshwari Nagar",
    "Bilekahalli",
    "Billekahalli",
    "Binny Mills Employees Colony,JP Nagar",
    "Bismillahnagar",
    "Bommanahalli",
    "Bommanahalli, Bengaluru, Karnataka, India",
    "Brookefield",
    "Brookefield, Bengaluru, Karnataka, India",
    "Brookfield",
    "Byappanahalli",
    "Byatarayanapura",
    "Byrasandra",
    "C V Raman",
    "C V Raman Nagar",
    "CHANDRA LAYOUT",
    "CV Raman Nagar",
    "Cambridge Layout",
    "Carmelaram",
    "Carmelaram, Bengaluru, Karnataka, India",
    "Cauvery Colony,Koramangala",
    "Chakravarthy Layout",
    "Challaghatta",
    "Chamarajpet",
    "Chamrajpet",
    "Chandana,",
    "Chandra Layout",
    "Chandra Layout,Marathahalli",
    "Channasandra",
    "Channasandra,Srinivaspura",
    "Chansandra",
    "Chansandra, Koralur",
    "Chennappa Layout,Chinnapanna Halli",
    "Chickpet",
    "Chikka Adugodi",
    "Chikka Madivala",
    "Chikkabellandur",
    "Chikkakannalli",
    "Chikkalasandra",
    "Chikkalsandra",
    "Chikkasandra",
    "Chikku Lakshmaiah Layout,Adugodi",
    "Chinappa Layout,Mahadevapura",
    "Chinnapanahalli",
    "Chinnapanna Halli",
    "Cholourpalya",
    "Cleveland Town",
    "Cooke Town",
    "Cottonpete",
    "Cox Town",
    "Cox Town, Bengaluru, Karnataka, India",
    "Creative Sree Nilaya, HSR Layout, Bengaluru, Karnataka, India",
    "Cubbonpete",
    "Dairy Circle",
    "Dasarahalli",
    "Dattatreya Nagar",
    "Deepanjali Nagar",
    "Defence Scientist",
    "Devarabeesana Halli",
    "Devarabisanahalli,Bellandur",
    "Devasthanagalu,Balagere",
    "Devasthanagalu,Varthur",
    "DivyaSree Republic of Whitefield, Kundalahalli Rd, Kundalahalli, Whitefield, Bengaluru, Karnataka, India",
    "Dodda Banaswadi",
    "Dodda Nekkundi Extension,Doddanekkundi",
    "DoddaNekkundi",
    "Doddakannalli",
    "Doddakannelli",
    "Doddakannelli, Bengaluru, Karnataka, India",
    "Doddanakundi",
    "Doddanekkundi",
    "Doddanekkundi Industrial Area Road, Dodda Nekkundi Extension, Doddanekkundi, Bengaluru, Karnataka, India",
    "Doddanekkundi,",
    "Doddanekkundi,Doddanekkundi",
    "Doddanekundi",
    "Doddanekundi,Doddanekkundi",
    "Doddanekundi,Kaggadasapura",
    "Doddanekundi,Mahadevapura",
    "Dodsworth Layout,Whitefield",
    "Domlur",
    "Doopanahalli",
    "Dwaraka Nagar,Banashankari",
    "EPIP Zone,Brookefield",
    "EPIP Zone,Whitefield",
    "Eastwood Township,Harlur",
    "Eastwood Township,Kasavanahalli",
    "Edgah Road, Devasthanagalu, Varthur",
    "Egipura",
    "Ejipura",
    "Ejipura,",
    "Ejipura, Bengaluru, Karnataka, India",
    "Eshwara Layout,Indiranagar",
    "Excel Stone Florence Apartments, Balagere, Bengaluru, Karnataka, India",
    "Food Garden Road, Food Garden Rd, Anugraha Layout, Langford Town, Shanti Nagar, Bengaluru, Karnataka 560027, India",
    "Frazer Town",
    "GM Palya",
    "GM Palya, C V Raman Nagar, Bengaluru, Karnataka, India",
    "GM Palya,C V Raman Nagar",
    "Gandhi Bazaar",
    "Gandhi Nagar, Munnekollal",
    "Gandhi Nagar,Marathahalli",
    "Ganesh Nivas, 7th Cross Road, Ramanjaneyanagar, Bengaluru, Karnataka, India",
    "Garebhavipalya",
    "Garudachar Palya, Mahadevapura",
    "Garudachar Palya,Mahadevapura",
    "Gattigere,RR Nagar",
    "Giri Nagar",
    "Girinagar",
    "Girinagar, Banashankari",
    "Global village Tech Park Road, RV Vidyaniketan, Bengaluru, Karnataka, India",
    "Gnana Bharathi",
    "Govindaraja Nagar Ward, Govindarajanagar, Vijaya Nagar, Bengaluru, Karnataka, India",
    "Govindarajanaga",
    "Govindarajanagar",
    "Green Glen Layout",
    "Green Glen Layout, Bellandur",
    "Green Glen Layout,Bellandur",
    "Guddadahalli",
    "Gunjur",
    "Gunjur Palya",
    "Gunjur Village",
    "Gunjur, Bengaluru, Karnataka, India",
    "Guttahalli",
    "HAL",
    "HAL 2nd Stage",
    "HAL 3rd Stage",
    "HAL 3rd Stage, Bengaluru, Karnataka, India",
    "HAL Post",
    "HARLUR",
    "HSR Layout",
    "HSR Layout 1st Sector",
    "HSR Layout 2nd Sector",
    "HSR Layout 5th Sector",
    "HSR Layout 7th Sector",
    "HSR Layout Sector 7",
    "HSR Layout,",
    "HSR Layout, Sector 1",
    "HSR Layout, Sector 3",
    "HSR Layout, Sector 7",
    "HSR layout",
    "HSR layout Sector 2",
    "Halanayakanahalli",
    "Halasahalli",
    "Halasuru",
    "Halasuru Police Station",
    "Hampi Nagar",
    "Hanumanth Nagar",
    "Hanumanth Nagar, Near Ramanjaneya Temple",
    "Hanumanthnagar",
    "Haralur",
    "Harlur",
    "Harlur Main Road",
    "Harlur Main Road, PWD Quarters, 1st Sector, Harlur, Bengaluru, Karnataka, India",
    "Hemmigepura Ward 198,RR Nagar",
    "Hombegowda",
    "Hongasandra",
    "Hoodi",
    "Hoodi Circle, Hudi, Hoodi, Bengaluru, Karnataka",
    "Hoodi Railway Flyover, Thigalarapalya, Krishnarajapura,",
    "Hope Farm Junction, Maithri Layout, Kadugodi, Bengaluru, Karnataka",
    "Hope Farm, Maithri Layout, Kadugodi, Bengaluru, Karnataka, India",
    "Hosakerehalli",
    "Hosapalaya",
    "ISRO Layout",
    "ITC Colony,Maruthi Sevanagar",
    "ITI Layout",
    "ITI Layout, Sector 7",
    "ITPL",
    "ITPL, Whitefield, Bengaluru, Karnataka, India",
    "Ibblur",
    "Iblur Village",
    "Iblur Village,Bellandur",
    "Ideal Homes Township,RR Nagar",
    "Ilyas Nagar,Kumaraswamy Layout",
    "Immadihalli",
    "Immadihalli, Whitefield",
    "Immadihalli,Whitefield",
    "India Post, HAL 3rd Stage, Bhoomi Reddy Colony, New Tippasandra, Bengaluru, Karnataka, India",
    "Indira Nagar",
    "Indira Nagar II Stage",
    "Indira Nagar II Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka, India",
    "Indiranagar",
    "Indiranagar6",
    "Industrial Area,Hoodi",
    "Islampur,Vibhutipura",
    "Ittamadu",
    "J P Nagar",
    "J P Nagar 5 Phase",
    "J P Nagar 5th Phase",
    "J P Nagar Phase 5",
    "J P Nagar Phase 5,JP Nagar",
    "J. P. Nagar",
    "JCR Layout,Panathur",
    "JP Nagar",
    "JP Nagar 1st Phase",
    "JP Nagar 4th Phase",
    "JP Nagar 5th Phase",
    "JP Nagar 7th Phase",
    "JP Nagar Phase 2",
    "JP Nagar Phase 6",
    "JP Nagar Phase 6,",
    "JP Nagar Phase 6, JP Nagar, Bengaluru, Karnataka, India",
    "JP Nagar Phase 6,JP Nagar",
    "JP Nagar,",
    "JP Nagar, 2nd Phase",
    "Jagadish Nagar",
    "Jagadish Nagar, Basaweshwar Nagar, Nelluru Puram, Kaggadasapura, Bengaluru, Karnataka, India",
    "Jagadish Nagar,Kaggadasapura",
    "Jai Bheema Nagar",
    "Jakkasandra",
    "Janatha Colony,Chikkabellandur",
    "Jaya Nagar",
    "Jaya Nagar 9th Block",
    "Jaya Nagar 9th Block, 25th Main Road, Jayanagara 9th Block, Bengaluru, Karnataka, India",
    "Jaya Nagar East",
    "Jaya Nagar East,Jayanagar",
    "Jayamahal",
    "Jayanagar",
    "Jayanagar 1st Block",
    "Jayanagar 2nd Block",
    "Jayanagar 3rd Block",
    "Jayanagar 3rd Block East",
    "Jayanagar 4 Block",
    "Jayanagar 5th block",
    "Jayanagar 7 Block",
    "Jayanagar 9 block",
    "Jayanagara",
    "Jayanagara 9th Block",
    "Jayaprakash Nagar Metro Station, Kanakapura Road, Ilyas Nagar, Banashankari Temple Ward, Bengaluru, Karnataka, India",
    "Jeevan Bhima Nagar",
    "Jeevan Bima Nagar",
    "Jeevan Samskruthi Apartment, Shiridi Sai Temple Rd., 4th A Cross, Shirdi Sai Nagar, Munnekollal, Bengaluru, Karnataka 560037, India,Bengaluru",
    "Jeevanahalli",
    "Jeevanhalli",
    "Jogupalya",
    "Junnasandra",
    "Jyothi Nagar",
    "Jyothi Puram,Dooravani Nagar",
    "K R Garden,Murgesh Pallya",
    "KEB Rd, Chikka Madivala, 1st Stage, BTM Layout 1, Bengaluru, Karnataka 560068, India,Bengaluru",
    "KHB Games Village,Koramangala",
    "KPC Layout",
    "KR Garden, Murgesh Pallya",
    "KR Market",
    "Kachamaranahalli",
    "Kadarenahalli",
    "Kadubeesanahalli",
    "Kadubeesanahalli,",
    "Kadubeesanahalli, Bengaluru, Karnataka, India",
    "Kadugodi",
    "Kadugodi, Bengaluru, Karnataka, India",
    "Kaggadasapura",
    "Kaggadasapura, Bengaluru, Karnataka, India",
    "Kaikondanarhalli",
    "Kaikondrahalli",
    "Kalasipalya",
    "Kalidasa Layout, Srinagar, Banashankari, Bengaluru, Karnataka, India",
    "Kalyan Nagar",
    "Kamadhenu Nagar",
    "Kamaksipalya",
    "Kamala Nagar, Bengaluru, Karnataka, India",
    "Kamanahalli, Bengaluru, Karnataka, India",
    "Kamaraj Road, FM Cariappa Colony, Bengaluru, Karnataka, India",
    "Kammanahalli",
    "Kariyammana Agrahara,Bellandur",
    "Kasavanahalli",
    "Kasavanahalli Off Sarjapur Road",
    "Kasavanahalli, Bengaluru, Karnataka 560035, India",
    "Kasavanahalli, Bengaluru, Karnataka, India",
    "Kasavanhalli",
    "Kathreguppe",
    "Kathriguppe",
    "Kathriguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka, India",
    "Kaveri Layout",
    "Kaveri Nagar,Krishnarajapura",
    "Kempapura Agrahara",
    "Kempegowda Layout",
    "Kempegowda Nagar",
    "Kenchenhalli,RR Nagar",
    "Kengunte",
    "Keshava Nagar",
    "Keshava Nagar,Binnipete",
    "Kodbisanhalli",
    "Kodbisanhalli,",
    "Kodichikkanahalli",
    "Kodichikknahalli, Bengaluru, Karnataka, India",
    "Kodigehalli",
    "Kodigehalli,Krishnarajapura",
    "Kodihalli",
    "Kodihalli, HAL 3rd Stage",
    "Konanakunte",
    "Konena Agrahara",
    "Koralur",
    "Koramanagala",
    "Koramangala",
    "Koramangala 3 Block",
    "Koramangala 4 Block",
    "Koramangala 4th Block, Koramangala, Bengaluru, Karnataka, India",
    "Koramangala 4th Block,HSR Layout 5th Sector",
    "Koramangala 6th Block",
    "Koramangala 7th Block",
    "Koramangala 8th Block",
    "Koramangala 8th Block, Koramangala, Bengaluru, Karnataka, India",
    "Koramangala, Bengaluru, Karnataka, India",
    "Kormangala",
    "Kormangala 2nd block",
    "Krishna Garden Road, RR Nagar, Bengaluru, Karnataka, India",
    "Krishnappa Garden,Krishnarajapura",
    "Krishnarajapura",
    "Krishnarajapuram",
    "Kumara Park West",
    "Kumarapark West",
    "Kumaraswamy Layout",
    "Kumaraswamy Layout II Stage",
    "Kundalahalli",
    "Kundalahalli Colony,Brookefield",
    "Kundalahalli Gate",
    "Kundalahalli Gate, Varthur Main Road, Brookefield, Bengaluru, Karnataka, India",
    "Kundalahalli, Bengaluru, Karnataka, India",
    "Kundalahalli,Brookefield",
    "Kundalahalli,Whitefield",
    "Kundanahalli Gate",
    "LB Shastri Nagar",
    "LBS Nagar",
    "LBS Nagar, Vimanapura",
    "LBS Nagar,Vimanapura",
    "Lakkasandra",
    "Lakshminarayanapuram",
    "Lal Bahadur Shastri Nagar",
    "Laljinagar",
    "Langford Gardens",
    "Langford Town",
    "Langford Town, Shanti Nagar, Bengaluru",
    "Leela Palace Road, HAL 3rd Stage, Kodihalli",
    "Lingayana Palya",
    "M.C.Layout, Vijayanagar",
    "Madambakkam",
    "Madhura Nagar",
    "Madhura Nagar, Bengaluru, Karnataka, India",
    "Madiwala",
    "Mahadevapura",
    "Mahadevapura,",
    "Mahadevpura",
    "Mailasandra",
    "Maithri Layout,Kadugodi",
    "Mallathahalli",
    "Malleshpalya",
    "Malleshpalya, Kaggadasapura",
    "Malleshpalya,C V Raman Nagar",
    "Malleshpalya,Kaggadasapura",
    "Malleshwaram",
    "Malleshwaram West",
    "Malleswaram",
    "Mangammanapalya",
    "Manjunatha Nagar",
    "Marathahalli",
    "Marathahalli Village,Marathahalli",
    "Marathahalli, Bengaluru, Karnataka, India",
    "Maruthi Nagar",
    "Maruthi Sevanagar",
    "Maruti Nagar",
    "Mavalli",
    "Meenambakkam",
    "Michael Palaya",
    "Mico Layout",
    "Moodalapalya",
    "Mudalapalya",
    "Mudalapalya, Vijaya Nagar",
    "Mullur",
    "Munekollal",
    "Muneshwara Block",
    "Muneshwara Block, Telecom Colony, Bengaluru, Karnataka, India",
    "Muneshwara Nagar",
    "Muneswara Block",
    "Munivenkatppa Layout,Bilekahalli",
    "Munnekolal",
    "Munnekollal",
    "Munnekollal, Bengaluru, Karnataka, India",
    "Munnekollalu",
    "Munnireddy Layout, Panathur",
    "Munnireddy Layout,Panathur",
    "Murgesh Pallya",
    "Murgeshpalya",
    "Murphy Town,Ulsoor",
    "Murugeshpalya",
    "NGEF Layout",
    "NGEF Layout Nagarabhavi, NGEF Layout, Stage 2,",
    "NGR Layout,Bommanahalli",
    "NS Palya",
    "Nagappa Block",
    "Nagapura",
    "Nagarabhavi",
    "Nagarabhavi 2nd Stage",
    "Nagarabhavi Circle",
    "Nagarathpete",
    "Nagarbhavi",
    "Nagarbhavi 1st Stage, Stage 2, Chandra Layout, Bengaluru, Karnataka, India",
    "Nagarbhavi 2nd Stage",
    "Nagarbhavi Circle, Nagarabhavi Circle, Jyothi Nagar, Bengaluru, Karnataka, India",
    "Nagarbhavi, Bengaluru, Karnataka, India",
    "Nagavarapalya",
    "Nagondanahalli",
    "Nallurhalli",
    "Nallurhalli, Whitefield, Bengaluru, Karnataka, India",
    "Nallurhalli,Whitefield",
    "Narayanappa Garden,Whitefield",
    "Narayanapura",
    "Nayanda Halli",
    "Near Gopalan Arcade Mall, Behind Jain College,IRR Nagar,",
    "Neelasandra",
    "Nelluru Puram",
    "New Baiyyappanahalli Extension",
    "New Guddadahalli",
    "New Thippasandra",
    "New Timberyard Layout",
    "New Tippasandra",
    "No 8215,4th Main,2nd Cross,Shanthinikethan Layout, Marathahalli, 4, SGR Dental College Rd, Shamanna Reddy Layout, Kasavanahalli Village, Bellandur, Bengaluru, Karnataka 560037, India,Bengaluru",
    "No. 99, 8th A Cross Road, 3rd Main, Venkatapura, Koramangala 1st Block, Teacher&#39;s Colony, Jakkasandra, 1st Block Koramangala, HSR Layout 5th Sector, Bengaluru, Karnataka 560034, India,Bengaluru",
    "Outer Ring Road, Mahadevapura, Bengaluru, Karnataka, India",
    "Padmanabha Nagar",
    "Padmanabha nagar",
    "Padmanabhanagar",
    "Padmanabhanagar, Bengaluru, Karnataka, India",
    "Pai Layout, Mahadevapura, Bengaluru, Karnataka, India",
    "Pai Layout,Mahadevapura",
    "Palace Guttahalli",
    "Pallavaram",
    "Panathur",
    "Panchasheel Nagar",
    "Pantarapalya,Nayanda Halli",
    "Pantharapalya",
    "Papareddipalya",
    "Parangipalya",
    "Pattanagere",
    "Pattanagere,RR Nagar",
    "Pattandur Agrahara",
    "Pattandur Agrahara,Whitefield",
    "Pattegarhpalya",
    "Phase 1,Doddanekkundi",
    "Phase 1,Whitefield",
    "Phase 2,Brookefield",
    "Phase 4,JP Nagar",
    "Poornaprajna Layout",
    "Prakashnagar",
    "Prasanth Extension, Whitefield, Bengaluru, Karnataka, India",
    "Prashant Nagar, Vijaya Nagar, Bengaluru, Karnataka, India",
    "Prestige Ozone,Whitefield",
    "Prestige Shantiniketan, Hoodi, Bengaluru, Karnataka, India",
    "Pulikeshi Nagar",
    "Pulkeshi Nagar",
    "Purvankara Whitehall, Sarjapur Main Road, Harlur, Bengaluru, Karnataka, India",
    "RK Mutt Rd, Gupta Layout, Ulsoor, Bengaluru, Karnataka 560008, India,Bengaluru",
    "RPC Layout",
    "RR Nagar",
    "RR Nagar Arch, Kenchenhalli, Bengaluru, Karnataka, India",
    "RR Nagar, Bengaluru, Karnataka, India",
    "Ragavendra Layout, Nisarga Layout",
    "Rainbow Drive,Halanayakanahalli",
    "Raj Rajeswari Nagar BMTC Bus Depot, Raja Rajeshwari Nagar, Bengaluru, Karnataka, India",
    "Raja Rajeshwari Nagar",
    "Rajaji Nagar",
    "Rajaji Nagar,",
    "Rajaji Nagar, 2nd Block, Bengaluru, Karnataka, India",
    "Rajaji Nagar, 2nd Stage",
    "Rajaji Nagar, Bengaluru, Karnataka, India",
    "Rajaji nagar",
    "RajajiNagar",
    "Rajajinagar",
    "Rajarajeshwari Nagar",
    "Rajarajeshwarinagar",
    "Rajarajeswarinagar",
    "Rajashree Layout, Gandhi Nagar",
    "Ramagondanahalli",
    "Ramagondanahalli,Whitefield",
    "Ramanashree Enclave,Bilekahalli",
    "Ramesh Nagar",
    "Raneem Nilayam, 5th B Cross Rd, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008, India,Bengaluru",
    "Ranganathan Colony",
    "Ranka Colony,Bilekahalli",
    "Rasanna Colony,Vibhutipura",
    "Richmond Town",
    "Roopena Agrahara",
    "Roopena Agrahara, Bommanahalli",
    "Roopena Agrahara,Bommanahalli",
    "Rupena Agrahara",
    "Rustam Bagh Layout",
    "S.G. Palya",
    "SAP Labs India Pvt. Ltd., KIADB Export Promotion Industrial Area, Whitefield, Bengaluru, Karnataka, India",
    "SBM Colony",
    "SRK Garden, Jayanagar",
    "Sadanandanagar",
    "Sadanandanagar,Bennigana Halli",
    "Sadaramangala,Krishnarajapura",
    "Samethanahalli",
    "Sampangi Rama Nagar",
    "Sampangi Rama Nagara",
    "Sampige Layout",
    "Sanjeevini Nagar",
    "Sapna Book House, Michael Palaya, Indiranagar, Bengaluru, Karnataka, India",
    "Sarjapur",
    "Sarjapur Main Road",
    "Sarjapur Road",
    "Sarjapur Road Post Railway Crossing",
    "Sarjapur Road Till Wipro",
    "Sarjapur Road Wipro To Railway Crossing",
    "Sarjapur Road, Kaikondrahalli",
    "Sector 1, HSR Layout",
    "Sector 2, HSR Layout",
    "Sector 2,HSR Layout",
    "Sector 3, HSR Layout",
    "Sector 4 HSR Layout",
    "Sector 4,HSR Layout 5th Sector",
    "Sector 6,HSR Layout",
    "Sector 7, HSR Layout",
    "Sector 7,HSR Layout",
    "Seegehalli,Kadugodi",
    "Seetarampalya, equal distance from Hoodi",
    "Seetharampalya",
    "Seetharampalya,Hoodi",
    "Seetharampalya,Whitefield",
    "Sevanagar",
    "Shamana Garden,Wilson Garden",
    "Shankarapura",
    "Shanti Nagar",
    "Sheshadripuram",
    "Shirdi Sai Nagar,Munnekollal",
    "Shivaji Nagar",
    "Shubh Enclave, Harlur, Bengaluru, Karnataka, India",
    "Siddapura",
    "Siddapura, Bengaluru, Karnataka, India",
    "Siddapura,Whitefield",
    "Silver Springs Layout,Marathahalli",
    "Silver Springs Layout,Munnekollal",
    "Sindhi Colony,Pulikeshi Nagar",
    "Sobha Dream Acres, Balagere Road, Varthur, Bengaluru, Karnataka, India",
    "Somasundara Palya",
    "Someshwara Layout,Doddakannelli",
    "Someshwara Nagar",
    "Sorahunase",
    "Spoorthi Sahithya Apartment Mahadevapura",
    "Sri Jnanakshi Vidyaniketan, Kenchena Halli Rd, Halagevaderahalli, Rajarajeshwarinagar, Bengaluru, Karnataka, India",
    "Sri Krishna Garden Layout,RR Nagar",
    "Sri Lorven Homes, Kondappa Layout, Vignan Nagar, Viswajeeth Layout, Doddanekkundi, Bengaluru, Karnataka 560075",
    "Sri Sai Baba Ashram, Kadugodi white field",
    "Srinagar",
    "Srinivapura",
    "Srinivasanagara, Banashankari Stage I",
    "Srinivasnagar",
    "Srinivaspura",
    "Srirampura",
    "Srirampuram",
    "Stage 2, BTM Layout",
    "Stage 2,BTM 2nd Stage",
    "Stage 2,BTM Layout",
    "Subramanyapura",
    "Suddaguntapalya",
    "Suddaguntapalya,C V Raman Nagar",
    "Suddagunte Palya",
    "Suddagunte Palya,",
    "Sudhama Nagar",
    "Suncity Gloria Apartments, Sarjapur Main Road, Opp. to Decathlon Sports, Carmelaram, Ambedkar Nagar, Chikkabellandur, Carmelaram, Ambedkar Nagar, Chikkabellandur, Bengaluru, Karnataka 560035, India",
    "Sunkadakatte",
    "Swami Vivekananda Road, Upkar Layout, Whitefield",
    "Talacauvery Layout",
    "Tasker Town",
    "Tata Silk Farm,Jayanagar",
    "Tavarekere",
    "Tavarekere, Ramappa layout, 1st Stage, BTM Layout, Bengaluru, Karnataka, India",
    "Tavarekere, Suddagunte Palya",
    "Tavarekere,BTM Layout",
    "Thigalarapalya,Hoodi",
    "Thippasandra",
    "Thirumalashettyhally",
    "Thubarahalli",
    "Thubarahalli,Brookefield",
    "Thubarahalli,Munnekollal",
    "Thubarahalli,Whitefield",
    "Thubarahalli.",
    "Thyagaraja Nagar",
    "Tigalarpalya,Brookefield",
    "Tilak Nagar",
    "Tin Factory",
    "Tippasandra",
    "Tubarahalli",
    "Tyagaraja Nagar",
    "Udaya Nagar",
    "Udaya Nagar,Mahadevapura",
    "Ulsoor",
    "Uttarahalli",
    "Uttarahalli Bus Stand, Subramanyapura Main Rd, Friends Colony, Uttarahalli Hobli, Bengaluru, Karnataka 560061, India",
    "Uttarahalli Hobli",
    "Uttarahalli Hobli Stage 2",
    "Uttarahalli Road",
    "Uttarahallli",
    "VV Giri Colony,Sheshadripuram",
    "VV Puram",
    "Valepura",
    "Valliyamma Layout,Kaikondrahalli",
    "Varadharajapuram",
    "Varsova Layout,Kaggadasapura",
    "Varthur",
    "Varthur Balagere",
    "Varthur Kodi",
    "Vasanth Nagar",
    "Vasanth Nagar,",
    "Vasantha Nagara",
    "Veerabhadra Nagar",
    "Venkappa Garden,Koramangala",
    "Venkatapura",
    "Venkateshwara Layout",
    "Vibhutipura",
    "Victoria Layout",
    "Victoria Layout,",
    "Vidyapeeta Layout, Banashankari, Bengaluru, Karnataka, India",
    "Vignan Nagar",
    "Vijay Nagar",
    "Vijay Nagar, Whitefield",
    "Vijay Nagar,Whitefield",
    "Vijaya Nagar",
    "Vijayanagar",
    "Vijayanagar Metro Station, Chord Road, Vijaya Nagar, Bengaluru, Karnataka, India",
    "Vijaynagar",
    "Vimanapura",
    "Vinayak Nagar, Vinayaka Nagar, Murgesh Pallya, Bengaluru, Karnataka, India",
    "Vinayaka Nagar",
    "Virat Nagar",
    "Vishweshwarapura",
    "Vittal Nagar",
    "Viveka Nagar",
    "West Tambaram, Tambaram",
    "West of Chord Road",
    "Whitefield",
    "Whitefield Hope Farm Junction",
    "Whitefield, Bengaluru, Karnataka, India",
    "Wilson Garden",
    "Xavier Layout",
    "Yamalur,HAL",
    "Yelachenahallli",
    "Yelachenahallli,Kumaraswamy Layout",
    "Yemalur",
    "Yemalur Main Road, Kempapura, Bellandur, Bengaluru, Karnataka, India",
    "Yemalur,Bellandur",
    "d block AECS Layout, Bengaluru, Karnataka, India",
    "jagadish nagar , Kaggadasapura",
    "kaikondrahalli",
    "mesjestic",
    "uUlsoor, Bengaluru, Karnataka, India",
    "whitefield",
  ];

  const l2 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
    173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
    188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
    203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
    218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
    233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
    248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262,
    263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277,
    278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292,
    293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307,
    308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322,
    323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337,
    338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352,
    353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367,
    368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382,
    383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397,
    398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
    413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427,
    428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442,
    443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457,
    458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472,
    473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487,
    488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502,
    503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517,
    518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532,
    533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547,
    548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562,
    563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577,
    578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592,
    593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607,
    608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622,
    623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637,
    638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652,
    653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667,
    668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682,
    683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697,
    698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712,
    713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727,
    728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742,
    743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757,
    758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772,
    773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787,
    788, 789, 790, 791,
  ];

  console.log(l2);

  const obj = {};

  l1.forEach((ele, i) => {
    obj[ele] = l2[i];
  });

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {/* Header */}
      <div className="p-4 bg-gray-600 h-[60px] shadow-md grid md:grid-cols-3 content-center justify-items-center fixed top-0 left-0 w-full">
        <h1 className="tracking-widest font-bold text-lg text-cyan-500">
          Dharmiks 1.0
        </h1>
        <h1 className="tracking-widest font-light text-2xl">
          House Rent Predictor
        </h1>
        <div></div>
      </div>

      {/* Body */}
      <div className="min-h-screen pt-[60px]">
        <div className="mx-auto p-4 grid md:grid-cols-8 gap-4 h-full">
          <div className="col-span-2 bg-gray-800 rounded-md h-full w-full p-4 space-y-2">
            <h2 className="tracking-widest font-bold text-blue-500 border-b pb-1 border-gray-500">
              Filters
            </h2>
            <Filter
              onSubmit={(values) => {
                setFilters(values);
              }}
            ></Filter>
          </div>
          <div className=" col-span-6 shadow-md rounded-lg border border-gray-500 h-full w-full p-2 bg-gray-800">
            <h2 className="font-light text-gray-400 border-b border-gray-600 pb-1 text-2xl">
              Prediction
            </h2>
            <div className="grid md:grid-cols-3 justify-items-center text-center py-8">
              <div>
                <div></div>
                <div></div>
              </div>
              <div className="">
                <div className="flex items-end justify-center space-x-2">
                  <div className="text-2xl text-gray-400">Rs.</div>
                  <div className="text-7xl text-green-500">2000</div>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div className=" space-y-4">
              <div className=" border-b border-gray-500 text-gray-400 font-light tracking-wider">
                Other available prices
              </div>
              <div className="space-x-4">
                {[...Array(10).keys()].map((ele) => {
                  return (
                    <div className="p-1 px-4 border border-gray-500 text-cyan-400 inline-block rounded-md">
                      Rs. {ele * 5000 + 1000}
                    </div>
                  );
                })}
                <div className="text-white">{JSON.stringify(filters)}</div>
                <div className="text-white">{JSON.stringify(obj)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

function Filter({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        location: "",
        type: [],
        availableBy: "",
        tenants: "",
        furnishing: "",
        floor: 0,
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {(formik) => {
        return (
          <div className="space-y-4">
            {/*  */}
            <div className="space-y-1">
              <div className={filterTitle}>City</div>
              <div class="inline-block relative w-full">
                <Field as="select" name="location" className={fieldClassName}>
                  <option value="pune">Pune</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                </Field>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="space-y-1">
              <div className={filterTitle}>Type</div>
              <div className="grid grid-cols-5 gap-2 px-2">
                {types.map((type, index) => {
                  return (
                    <div className="flex space-x-2 text-xs" key={index}>
                      <Field
                        type="checkbox"
                        name="type"
                        value={type.value}
                        id="vue-checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-400 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></Field>
                      <div className=" text-gray-400 ">{type.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-2 gap-1">
              {/*  */}
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Furnishing</div>
                <div class="inline-block relative w-full">
                  <Field
                    as="select"
                    name="furnishing"
                    className={fieldClassName}
                  >
                    {furnishing.map((ele, index) => {
                      return <option value={ele.value}>{ele.label}</option>;
                    })}
                  </Field>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Floor</div>
                <div class="inline-block relative w-full">
                  <Field as="select" name="floor" className={fieldClassName}>
                    {[...Array(10).keys()].map((ele, index) => {
                      return (
                        <option value={ele}>
                          {ele === 0 ? "Ground" : ele}
                        </option>
                      );
                    })}
                  </Field>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 gap-1">
              <div className="space-y-1">
                <div className={filterTitle}>Available by</div>
                <div class="inline-block relative w-full">
                  <DatePicker
                    selected={formik.values.availableBy}
                    dateFormat="MMMM d, yyyy"
                    className={fieldClassName + ""}
                    name="availableBy"
                    onChange={(date) =>
                      formik.setFieldValue("availableBy", date)
                    }
                  />
                </div>
              </div>
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Preferred tenants</div>
                <div class="inline-block relative w-full">
                  <Field as="select" name="tenants" className={fieldClassName}>
                    <option value="red">Family</option>
                    <option value="green">Bachelore</option>
                    <option value="blue">Any</option>
                  </Field>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={formik.handleSubmit}
              className="text-white bg-transparent bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Predict
            </button>
          </div>
        );
      }}
    </Formik>
  );
}

const types = [
  { value: typesMapping["RK1"], label: "1 RK" },
  { value: typesMapping["BHK1"], label: "1 BHK" },
  { value: typesMapping["BHK2"], label: "2 BHK" },
  { value: typesMapping["BHK3"], label: "3 BHK" },
  { value: typesMapping["BHK4"], label: "4 BHK" },
  { value: typesMapping["BHK4PLUS"], label: "4 BHK+" },
];

const furnishing = [
  { value: "furnished", label: "Furnished" },
  { value: "semifurnished", label: "Semi furnished" },
  { value: "unfurnished", label: "Un furnished" },
];

const filterTitle = "text-sm px-1 text-gray-300";

const fieldClassName =
  "block appearance-none w-full bg-transparent border font-light border-gray-600 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-xs text-gray-400";

export default App;

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300 301 302 303 304 305 306 307 308 309 310 311 312 313 314 315 316 317 318 319 320 321 322 323 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 340 341 342 343 344 345 346 347 348 349 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365 366 367 368 369 370 371 372 373 374 375 376 377 378 379 380 381 382 383 384 385 386 387 388 389 390 391 392 393 394 395 396 397 398 399 400 401 402 403 404 405 406 407 408 409 410 411 412 413 414 415 416 417 418 419 420 421 422 423 424 425 426 427 428 429 430 431 432 433 434 435 436 437 438 439 440 441 442 443 444 445 446 447 448 449 450 451 452 453 454 455 456 457 458 459 460 461 462 463 464 465 466 467 468 469 470 471 472 473 474 475 476 477 478 479 480 481 482 483 484 485 486 487 488 489 490 491 492 493 494 495 496 497 498 499 500 501 502 503 504 505 506 507 508 509 510 511 512 513 514 515 516 517 518 519 520 521 522 523 524 525 526 527 528 529 530 531 532 533 534 535 536 537 538 539 540 541 542 543 544 545 546 547 548 549 550 551 552 553 554 555 556 557 558 559 560 561 562 563 564 565 566 567 568 569 570 571 572 573 574 575 576 577 578 579 580 581 582 583 584 585 586 587 588 589 590 591 592 593 594 595 596 597 598 599 600 601 602 603 604 605 606 607 608 609 610 611 612 613 614 615 616 617 618 619 620 621 622 623 624 625 626 627 628 629 630 631 632 633 634 635 636 637 638 639 640 641 642 643 644 645 646 647 648 649 650 651 652 653 654 655 656 657 658 659 660 661 662 663 664 665 666 667 668 669 670 671 672 673 674 675 676 677 678 679 680 681 682 683 684 685 686 687 688 689 690 691 692 693 694 695 696 697 698 699 700 701 702 703 704 705 706 707 708 709 710 711 712 713 714 715 716 717 718 719 720 721 722 723 724 725 726 727 728 729 730 731 732 733 734 735 736 737 738 739 740 741 742 743 744 745 746 747 748 749 750 751 752 753 754 755 756 757 758 759 760 761 762 763 764 765 766 767 768 769 770 771 772 773 774 775 776 777 778 779 780 781 782 783 784 785 786 787 788 789 790 791
