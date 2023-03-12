var a=[5,6,7],b=[5,6,8,9,6,5],c=[];
for(i=0;i<a.length;i++)
{
	for(j=0;j<a.length;j++)
	{
		if(a[i]===b[j])
		{
			c.push(a[i]);
		}
	}
}

console.log(c);