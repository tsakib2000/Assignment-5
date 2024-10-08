

// History button
document.getElementById('history-btn').addEventListener('click',function(){

document.getElementById('history-btn').classList.remove("border", "border-[#1111114D]");
document.getElementById("donation-btn").classList.add("border", "border-[#1111114D]");
classAdd('history-btn','bg-btnColor');
classRemove("donation-btn",'bg-btnColor');
classAdd('donation-card-container','hidden');
classRemove('History-container','hidden');

});
// donation button
document.getElementById('donation-btn').addEventListener('click',function(){

  document.getElementById('donation-btn').classList.remove("border", "border-[#1111114D]");
  document.getElementById("history-btn").classList.add("border", "border-[#1111114D]");
  document.getElementById('donation-card-container').classList.remove('hidden');

  classAdd('donation-btn','bg-btnColor');
  classRemove("history-btn",'bg-btnColor');
classAdd('History-container','hidden');
 
});

// Noakhali donation
document.getElementById("noakhali-btn").addEventListener('click',function(){
   const Input = getValuesByInput("noakhali-input");
   const mainBalance =getTextValue('main-balance');
   

 if(Input <= 0 || isNaN(Input)){
    alert('invalid amount')
    return;
 }
 if(mainBalance <= 0 || mainBalance < Input){
    alert('Insufficient Balance')
    return;
 }
    const TotalBalance = getTextField('main-balance')
    const totalMainBalance = mainBalance - Input
 TotalBalance.innerText = totalMainBalance;
const donationBalance = getTextValue('noakhali-balance')
const totalDonation = donationBalance + Input
 const Donation =getTextField('noakhali-balance');
 
 Donation.innerText = totalDonation;

 const historyDiv = document.createElement('div');
 historyDiv.className= " border border-gray-400 p-5 rounded-xl"
 historyDiv.innerHTML =`
 <p>${Input} Taka is Donate for  Flood at Noakhali, Bangladesh</p>
 <p class= 'text-gray-400'> Date : ${new Date()}</p>
 `;
 const historyContainer = document.getElementById("History-container")
historyContainer.insertBefore(historyDiv,historyContainer.firstChild);
 
//  Show MODAL
 document.getElementById('my_modal_1').showModal();
document.getElementById("noakhali-input").value = "";
});
//Feni donation
document.getElementById("feni-btn").addEventListener('click',function(){
   const Input = getValuesByInput("feni-input");
   const mainBalance =getTextValue('main-balance');

 if(Input<=0 || isNaN(Input)){
    alert('invalid amount')
    return;
 }
 if(mainBalance <= 0 || mainBalance < Input){
    alert('Insufficient Balance')
    return;
 }
    const TotalBalance = getTextField('main-balance')
    const totalMainBalance = mainBalance - Input
 TotalBalance.innerText = totalMainBalance;
const donationBalance = getTextValue('feni-balance')
const totalDonation = donationBalance + Input
 const Donation =getTextField('feni-balance');
 
 Donation.innerText = totalDonation;

 const historyDiv = document.createElement('div');
 historyDiv.className= " border border-gray-400 p-5 rounded-xl"
 historyDiv.innerHTML =`
 <p>${Input} Taka Donate for Flood Relief in Feni,Bangladesh</p>
 <p class= 'text-gray-400'> Date : ${new Date()}</p>
 `;
 const historyContainer = document.getElementById("History-container")
historyContainer.insertBefore(historyDiv,historyContainer.firstChild);

//  Show MODAL
 document.getElementById('my_modal_1').showModal();
 document.getElementById("feni-input").value = "";
});
//Quota injured donation
document.getElementById("quota-btn").addEventListener('click',function(){
   const Input = getValuesByInput("quota-input");
   const mainBalance =getTextValue('main-balance');

 if(Input<=0 || isNaN(Input)){
    alert('invalid amount')
    return;
 }
 if(mainBalance <= 0 || mainBalance < Input){
    alert('Insufficient Balance')
    return;
 }
    const TotalBalance = getTextField('main-balance')
    const totalMainBalance = mainBalance - Input
 TotalBalance.innerText = totalMainBalance;
const donationBalance = getTextValue('quota-balance')
const totalDonation = donationBalance + Input
 const Donation =getTextField('quota-balance');
 
 Donation.innerText = totalDonation;
 const historyDiv = document.createElement('div');
 historyDiv.className= " border border-gray-400 p-5 rounded-xl"
 historyDiv.innerHTML =`
 <p>${Input} Taka is Donate for  Injured in the Quota Movement</p>
 <p class= 'text-gray-400'> Date : ${new Date()}</p>
 `;
 const historyContainer = document.getElementById("History-container")
historyContainer.insertBefore(historyDiv,historyContainer.firstChild);
 

//  Show MODAL
 document.getElementById('my_modal_1').showModal();
 document.getElementById("quota-input").value = "";
});

//BLog Btn 
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='./blog.html';
});

