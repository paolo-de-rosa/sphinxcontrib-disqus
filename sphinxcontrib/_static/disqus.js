var disqus_shortname;
var disqus_identifier;
var disqus_config = function () {
var disqus_thread = $("#disqus_thread");
this.page.url = 'https://cloud-pa.readthedocs.org'; 
this.page.identifier = disqus_thread.data('disqus-identifier'); 
};

(function() {{
    var disqus_thread = $("#disqus_thread");
    disqus_shortname = disqus_thread.data('disqus-shortname');
    disqus_identifier = disqus_thread.data('disqus-identifier');
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    dsq.setAttribute('data-timestamp', +new Date());
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
}})();

