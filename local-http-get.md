When you execute a local GET request to https target, you need to add the following code

```cs
public bool AcceptAllCertifications(object sender, System.Security.Cryptography.X509Certificates.X509Certificate certification, System.Security.Cryptography.X509Certificates.X509Chain chain, System.Net.Security.SslPolicyErrors sslPolicyErrors)
{
    return true;
}

webRequest.ServerCertificateValidationCallback = AcceptAllCertifications;
```
