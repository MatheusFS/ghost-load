# ghost-load
 progressive loading with AJAX

# Instalation

```html
<script src="{{ asset('js/ghost-load.js') }}" onload="GhostLoadInit()" defer></script>
```
ResourceController@index
```php
$this->show($resource)->with('ghost', 1);
// ...
return view('Resource.index')->with('resources', $resources);
```

# Usage

index.blade.php
```javascript
function GhostLoadInit(){

    _GhostLoad = new GhostLoad(
        '{{route('resource.show', ['resource_id' => ':id'])}}', // Show route of your resource
        {!! json_encode($resource->pluck('id')) !!} // IDs to be replaced
    );

    _GhostLoad.replaceElements() // Call replaces Promise
    .then(resp => console.log(resp)); // Log result
}
```




