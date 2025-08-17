 // basic interactivity: open modal with preselected plan
    function openModal(plan){
      document.getElementById('modal').style.display='flex';
      document.getElementById('mPlan').value = plan || 'Monthly';
      document.getElementById('modalTitle').textContent = 'Join PeakFit — ' + plan;
      document.getElementById('mName').focus();
    }
    function closeModal(){document.getElementById('modal').style.display='none';}

    function submitModal(e){
      e.preventDefault();
      const name = document.getElementById('mName').value;
      const email = document.getElementById('mEmail').value;
      const plan = document.getElementById('mPlan').value;
      alert('Thanks '+name+"! We'll contact you at " + email + ' about the ' + plan + ' plan.');
      closeModal();
    }

    // simple contact form handler
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(e.target);
      alert('Thanks ' + fd.get('name') + '! We received your message.');
      e.target.reset();
    });

    // open modal from other buttons
    document.getElementById('heroJoin').addEventListener('click', ()=>openModal('Monthly'));
    document.getElementById('joinBtn').addEventListener('click', (ev)=>{ev.preventDefault();openModal('Monthly')});

    // tiny accessibility: escape to close modal
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });