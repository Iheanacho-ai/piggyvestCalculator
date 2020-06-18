document.getElementById('tar').onclick = () =>{
    let interest = document.getElementById('showRate');
    let rate = document.getElementById('rate');
    rate.style.color = 'green';    
    interest.textContent = '10%';
    interest.style.color = 'green';
    document.getElementById('tar').style.color = 'green'
    document.getElementById('piggy').style.color = '#000000'
    document.getElementById('safe').style.color = '#000000'
    document.getElementById('flexN').style.color = '#000000'
    document.getElementById('flexD').style.color = '#000000'
}

document.getElementById('safe').onclick = () =>{
    let interest = document.getElementById('showRate');
    let rate = document.getElementById('rate');
    rate.style.color = '#30A8F5';
    interest.textContent = '6% - 15.5%';
    interest.style.color = '#30A8F5';
    document.getElementById('tar').style.color = '#000000'
    document.getElementById('piggy').style.color = '#000000'
    document.getElementById('safe').style.color = '#30A8F5'
    document.getElementById('flexN').style.color = '#000000'
    document.getElementById('flexD').style.color = '#000000'
}

document.getElementById('piggy').onclick = () =>{
    let interest = document.getElementById('showRate');
    let rate = document.getElementById('rate');
    interest.textContent = '10% - 15%';
    rate.style.color = '#062863';
    interest.style.color = '#062863';
    document.getElementById('tar').style.color = '#000000'
    document.getElementById('piggy').style.color = '#062863'
    document.getElementById('safe').style.color = '#000000'
    document.getElementById('flexN').style.color = '#000000'
    document.getElementById('flexD').style.color = '#000000'
}

document.getElementById('flexN').onclick = () =>{
    let interest = document.getElementById('showRate');
    let rate = document.getElementById('rate');
    interest.textContent = '10% - 15%';
    interest.style.color = '#e94ea5' ;
    rate.style.color = '#e94ea5';
    document.getElementById('tar').style.color = '#000000'
    document.getElementById('piggy').style.color = '#000000'
    document.getElementById('safe').style.color = '#000000'
    document.getElementById('flexN').style.color = '#e94ea5'
    document.getElementById('flexD').style.color = '#000000'
}

document.getElementById('flexD').onclick = () =>{
    let interest = document.getElementById('showRate');
    let rate = document.getElementById('rate');    
    interest.textContent = '6%';
    interest.style.color = 'Grey';
    rate.style.color = 'grey';
    document.getElementById('tar').style.color = '#000000'
    document.getElementById('piggy').style.color = '#000000'
    document.getElementById('safe').style.color = '#000000'
    document.getElementById('flexN').style.color = '#000000'
    document.getElementById('flexD').style.color = 'grey'
}

