function cek(){
    nama=document.getElementById('nama').value;
    nim=document.getElementById('nim').value;
    agama=document.getElementById('agama').value;
    prodi=document.getElementById('prodi').value;
    email=document.getElementById('email').value;
    jenis=document.getElementById('jenis').value;
    alamat=document.getElementById('alamat').value;
    kelas=document.getElementById('kelas').value;
 
  if(nama==''||nama==null){
    document.getElementById('e_nama').innerHTML="Harus diisi";
    return false;
    }
  if(nim==''||nim==null){
    document.getElementById('e_nim').innerHTML="Harus diisi";
    return false;
    }
  if(agama=='-'||agama==''||agama==null){
    document.getElementById('e_agama').innerHTML="Harus diisi";
    return false;
    }
  if(prodi=='-'||prodi==''||prodi==null){
    document.getElementById('e_prodi').innerHTML="Harus diisi";
    return false;
    }
   if(email==''||email==null){
    document.getElementById('e_email').innerHTML="Harus diisi";
    return false;
    }
  if(jenis=='-'||jenis==''||jenis==null){
    document.getElementById('e_jenis').innerHTML="Harus diisi";
    return false;
    }
  if(alamat==''||alamat==null){
    document.getElementById('e_alamat').innerHTML="Harus diisi";
    return false;
    }
  if(kelas==''){
      document.getElementById('e_kelas').innerHTML="Harus diisi";
      return false;
    }

  if(nama!=''&& nim!=''&& agama!='-'&& prodi!='-'&& email!=''&& jenis!='-' && alamat!='' && kelas!='') {
    document.getElementById('Hasil').innerHTML="Nama : "+nama+"<br>Nim : "+nim+"<br>Agama : "+agama+"<br>Prodi : "+prodi+"<br>Email : "+email+"<br>Jenis Kelamin : "+jenis+"<br>Alamat : "+alamat+"<br>Kelas : "+kelas;
    return false;
  }
  }