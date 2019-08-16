# ghost-load
 progressive loading with AJAX

## Instalation

```html
<script src="{{ asset('js/ghost-load.js') }}" onload="GhostLoadInit()" defer></script>
```
**ResourceController@index**
```php
$request->replace(['mods' => $request->input('mods').',ghost']); // Add 'ghost' to show() modifiers
$views[] = $this->show($produto, $request);
// ...
return view('Resource.index')->with('resources', $resources); // Send Collection to index View
```

## Usage

**index.blade.php**
```javascript
function GhostLoadInit(){

    _GhostLoad = new GhostLoad(
        '{{route('resource.show', ['resource_id' => ':id'])}}', // Show route of your resource
        {!! json_encode($resource->pluck('id')) !!} // IDs to be replaced (array CANNOT be associative)
    );

    
    _GhostLoad2 = new GhostLoad(
        '{{route('resource2.show', ['resource2_id' => ':id'])}}', // Show route of other resource
        {!! json_encode($resource2->pluck('id')) !!} // IDs to be replaced
    );

    Promise.all([ // Replace elements returns promisses to run dependable scripts after all replaces
        _GhostLoad.replaceElements(), // GET show() - without 'ghost' modifier - replaces
        _GhostLoad2.replaceElements() // replaces for other resource
    ]).then(resp => {
        console.log(resp); // Log promises responses
        // Your elements are ready! Run any dependable scripts here.
    });
}
```




