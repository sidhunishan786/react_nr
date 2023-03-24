#include<bits/stdc++.h>

using namespace std;
// fast input and output 
void init_code(){
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
}
#define nl "\n"
#define pb push_back
#define mod 1000000007
#define bp __builtin_popcount
#define gd __gcd
#define int long long int
#define ld float

// seive 
vector<int> soe(int n){
    vector<bool> v(n+1,true);
    v[0]=v[1]=false;

    for (int i = 2; i*i <= n; i++)
    {
        if(v[i]){
            for (int j = i*i; j<v.size(); j=j+i)
            {
            v[j]=false;
            }
        }

    }
    vector<int> ans;
    for (int i = 0; i < v.size(); i++)
    {
        if(v[i])
        ans.push_back(i);
       
    }
    

    return ans;
   
}
// fast exponentation 
// 
int b_expo(int n,int m){
    if(m==0){
        return 1;
    }
    if(m==1) return n%mod;

    int x=b_expo(n,m/2);
    if(m%2==1){
        return ((x)*(x)*(n))%mod;
    }
    return ((x)*(x))%mod;
}
// fibonacci series 
vector<int> fibseries(){
    int rem=1;
    int a=0;
    int b=1;
    int c=1;
    vector<int> fib(60);
    for (int i = 0; i < 60; i++)
    {
        
        fib[i]=a%10;
        a=b%10;
        b=c%10;
        c=(a+b)%10;
        

    }
    return fib;
}


// function for printing vector

template <typename T> void printv(vector<T> v){
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";

    }
    cout<<endl;
    
}



vector<int> merge_sorted_vecs(vector<int> v,vector<int> t){
    vector<int> ans(v.size()+t.size());
    int idx=0;
    int iv=0,it=0;
    while (iv<v.size() && it<t.size())
    {
        if(v[iv]<t[it]){
            ans[idx]=v[iv];
            iv++;
        }
        else
        {
            ans[idx]=t[it];
            it++;
        }
        idx++;
        /* code */
    }
    while (iv<v.size())
    {
        ans[idx]=v[iv];
        iv++;
        idx++;
        /* code */
    }
    while (it<t.size())
    {
        ans[idx]=v[it];
        it++;
        idx++;

   
    }
    
    return ans;
    

}

//disjoint set union

int find(int x,vector<int> &p){
    if(x==p[x]) return x;

    return p[x]=find(p[x],p);
}
void union_(int x,int y,vector<int> &p){
    x=find(x,p);
    y=find(y,p);
    p[min(x,y)]=max(x,y);
    return ;
}

int factorial(int n){
    int x=1;
    for (int i = 2; i <=n; i++)
    {
        x=x*i;
   
    }
    return x;

}
void input_arr(vector<int> &v){
    for (int i = 0; i < v.size(); i++)
    {
        cin>>v[i];
   
    }
    
}
//------------------------------------------------------------- header files -------------------------------------------------------------------//

void solve(){
   int n,m;
   cin>>n>>m;
   //cout<<"ans- >";
   vector<int> v={0,-m,1,m+1};
   if(n%2==0){
    cout<<n+v[m%4]<<nl;
    return ;
   }

   cout<<n-v[m%4]<<nl;
   return;
    
    
    
   
}

int32_t main()
{   

   
    
    // solve();
    // return 0;
    
   
    int t;

    cin>>t;
    
    while (t--)
    {
        solve();
 
    }
    
}